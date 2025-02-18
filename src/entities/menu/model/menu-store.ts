import { create } from 'zustand';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonIcon from '@mui/icons-material/Person';

import { TMenuState, TMenuStore } from '@/entities/menu/model/menu-type.ts';
import { TMenu } from '@/entities/menu';
import { Router } from '@/entities/router';
import { useShallow } from 'zustand/react/shallow';

export const menus: TMenu[] = [
  {
    name: '홈',
    icon: HomeOutlinedIcon,
    router: Router.HOME,
  },
] as const;

export const informationMenu: TMenu = {
  name: '내 정보',
  icon: PersonIcon,
  router: Router.INFORMATION,
};

const initialState: TMenuState = {
  selectedMenu: menus[0],
};

const useMenuStore = create<TMenuStore>()((setState) => {
  return {
    state: {
      ...initialState,
    },
    actions: {
      setSelectedMenu: (menu) => {
        setState((state) => {
          return {
            ...state,
            state: {
              ...state.state,
              selectedMenu: menu,
            },
          };
        });
      },
    },
  };
});

export const menuActions = useMenuStore.getState().actions;
export const useMenuState = () => useMenuStore(useShallow((state) => state.state));
