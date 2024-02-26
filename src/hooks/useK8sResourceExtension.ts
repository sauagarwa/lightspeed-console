import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Action, ExtensionHook, K8sResourceKind } from '@openshift-console/dynamic-plugin-sdk';

import { setContext } from '../redux-actions';

const useK8sResourceExtension: ExtensionHook<Array<Action>, K8sResourceKind> = (k8sResource) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [actions] = React.useState<Action[]>([
    {
      id: 'ols',
      label: 'Ask OpenShift Lightspeed',
      cta: () => {
        dispatch(setContext(k8sResource));
        history.push('/lightspeed');
      },
    },
  ]);
  return [actions, true, null];
};

export default useK8sResourceExtension;