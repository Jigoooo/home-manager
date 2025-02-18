import { Box, Typography } from '@mui/joy';

import { menuActions, TMenu } from '@/entities/menu';

export function SidebarItem({
  isSelected,
  menu,
  onClickMenu,
}: {
  isSelected: boolean;
  menu: TMenu;
  onClickMenu: (menu: TMenu) => void;
}) {
  return (
    <Box
      key={menu.router}
      sx={{
        display: 'flex',
        width: '100%',
        gap: 1.4,
        alignItems: 'center',
        px: 1,
        py: 0.6,
        cursor: 'pointer',
        backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.34)' : 'transparent',
        borderRadius: 8,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.34)',
        },
        transition: 'all 0.2s',
      }}
      onClick={() => {
        menuActions.setSelectedMenu(menu);
        onClickMenu(menu);
      }}
    >
      <menu.icon sx={{ color: '#ffffff', fontSize: '1.6rem' }} />
      <Typography sx={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 700 }}>
        {menu.name}
      </Typography>
    </Box>
  );
}
