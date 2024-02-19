import React, { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import mixpanel from 'mixpanel-browser';
import { getHotjarMixpanelDetails } from '../api/projects';
import useRequestApi from '../hooks/useRequestApi';

const _ = require('lodash');

export const App = () => {
  const getDetailsApi = useRequestApi(getHotjarMixpanelDetails);
  useEffect(() => {
    handleHotjarMixpanelDetails();
  }, []);

  const handleHotjarMixpanelDetails = async () => {
    await getDetailsApi.requestDetails();
    if (!_.isEmpty(getDetailsApi.results.data)) {
      hotjar.initialize(getDetailsApi.results.data.hotjar_site_id, getDetailsApi.results.data.hotjar_snippet_version);
      mixpanel.init(getDetailsApi.results.data.mixpanelProjectToken);
    }
  }
  return (
    <Grid>App file content goes here</Grid>
  );
}