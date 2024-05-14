'use client';

import React, { useEffect, useState } from 'react';
import { getAllProviders } from '@/lib/data/providers.api';
import Card from '@/ui/card';
import InputCheckbox from '@/ui/input/checkbox';
import Separator from '@/ui/separator';

interface ProviderItem {
  id: number | string;
  label: string;
  check: boolean;
}

const SelectProvidersFragment: React.FC = () => {

  const [providers, setProviders] = useState<ProviderItem[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const init = () => {
    getAllProviders().then((data) => {
      const providersChecked = data.map(item => (
        {
          id: parseInt(item.id),
          label: item?.name || item?.Name,
          check: false,
        }
      ));
      setProviders(providersChecked);
    });
  };

  const handleSelectAllItem = (isSelected: boolean) => {
    const providersClone = providers.slice().map(item => ({ ...item, check: isSelected }));
    setProviders(providersClone);
    setSelectAll(isSelected);
  };

  const handleSelectOneItem = (isSelected: boolean, key: number | string) => {
    const providersClone = providers.slice().map(item => {
      if (item.id === key)
        return { ...item, check: isSelected };
      return { ...item };
    });
    setProviders(providersClone);
  };

  useEffect(() => {
    return () => {
      init();
    };
  }, []);

  return (
    <Card>
      <h3 className={'font-roboto uppercase'}>Autoexclusión PROVEEDORES</h3>
      <InputCheckbox name={'providersAll'} label={'Todos'} value={-1} isChecked={selectAll} onChange={handleSelectAllItem}/>
      <Separator/>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {providers.map((provider, it) => (
          <React.Fragment key={it}>
            <InputCheckbox name={'providers'}
                           label={provider.label}
                           value={provider.id}
                           isChecked={provider.check}
                           onChange={handleSelectOneItem}/>
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};

export default SelectProvidersFragment;