import { Box, Stack } from '@mui/joy';
import { Outlet } from 'react-router-dom';

import { colors } from '@/shared/constants';
import { menus } from '@/entities/menu';
import { MainMenuController, SidebarItems } from '@/widgets/main';

export function Main() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        minHeight: 600,
        backgroundColor: '#ffffff',
      }}
    >
      <Box sx={{ minWidth: 300, width: 300, height: '100%', px: 1, py: 1 }}>
        <Stack
          sx={{
            position: 'relative',
            backgroundColor: colors.primary[400],
            height: '100%',
            borderRadius: 12,
            px: 1.4,
            py: 2,
            gap: 1.6,
          }}
        >
          <SidebarItems menus={menus} />
        </Stack>
      </Box>

      <Stack sx={{ flexGrow: 1, height: '100%', overflowX: 'auto' }}>
        <Outlet />
      </Stack>

      <MainMenuController />
    </Box>
  );
}
