import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function BoardBar() {
  const theme = useTheme(); // Dynamically get the active theme

  const MENU_STYLES = {
    color: "white",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "4px",
    px: "5px", // shorthand for paddingX
    ".MuiSvgIcon-root": {
      color: "white",
      "&:hover": {
        backgroundColor: theme.palette.primary.main[50],
        // backgroundColor: alpha(theme.palette.primary.main, 0.5),
      },
    },
    "&:hover": {
      // backgroundColor: alpha(theme.palette.primary.main, 0.5), // Using alpha function for proper transparency
      backgroundColor: theme.palette.primary.main[50],
    },
  };

  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        // borderBottom: "1px solid white",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Hoai Nam Dev Board"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/ Private Workspace"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="AUTOMATION"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          // onClick={() => {}}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "white" },
          }}
          startIcon={<PersonAddIcon></PersonAddIcon>}
        >
          Invite
        </Button>

        <AvatarGroup
          max={5}
          total={22}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": { backgroundColor: "#a4b0be" },
            },
          }}
        >
          <Tooltip title="HoaiNam">
            <Avatar
              alt="HoaiNam"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/481654969_2029992184166684_6381387291744711884_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dC7XfthFEvUQ7kNvgEZcmiH&_nc_oc=AdiHfr3dcKgRUpa2h8ND2PnDUPqUCYsdaech5tZ5COmBV85T93DXwGp9VflRO3aq2Lg&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AWDLmh07FE9CZUChkCmFRQz&oh=00_AYHv-bt0bIVx_P6Ps_vsH-O6l1t39-E2-fRycy-fNOCtwg&oe=67D373AD"
            />
          </Tooltip>
          <Tooltip title="HoaiNam">
            <Avatar
              alt="HoaiNam"
              src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/471206575_932329248997657_4732669301844316376_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=H9OvMfMEUjcQ7kNvgFYyhlp&_nc_oc=Adg0dtssjbcJukmQr1r8OYMfvy_wphxp0-_h3KbuwTqmJhIY690jled4zOraSHprQr8&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=Aex8vNP92zCKnxxjF6FZBJN&oh=00_AYHZlYyHqrjUGKXU7WpmffAydrUFxK1fqfgsi2oGOi7onQ&oe=67D353AF"
            />
          </Tooltip>
          <Tooltip title="HoaiNam">
            <Avatar
              alt="HoaiNam"
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/470138919_924041636493085_4557227739137720201_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UKv2exn2jkwQ7kNvgHhASQB&_nc_oc=Adie38KKX-R_AXIFehdMUfrkouJRqilTHviu2CcHTBmvW1d3SGnmSYm6XpAUkTUpRNk&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AWjD2E5anjdOLcCKLI9tiLE&oh=00_AYG40bjqGsyNqM2bcQBgC2QkVzl129d_i-0SXLoojwCdvA&oe=67D350AE"
            />
          </Tooltip>
          <Tooltip title="HoaiNam">
            <Avatar
              alt="HoaiNam"
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/465709223_897996269097622_9102770122925707492_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=upLTCbgj0WIQ7kNvgEE6UCc&_nc_oc=AdjS1wZ5o7KLvrx5jh1XNZwKpH-9KEVtUkxKluHjxXRAFW4fkU70kgM57Y_sGIQFEws&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=ASF5DIiFMQv6xPM6eBQwUx_&oh=00_AYE_RT0NIX-R8tJ-OlTO1jjkB58JADc0C9LjwJlTPIXyiQ&oe=67D36E87"
            />
          </Tooltip>
          <Tooltip title="HoaiNam">
            <Avatar
              alt="HoaiNam"
              src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/465727420_897401329157116_1352942556812812103_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HuRFJ2Bl_54Q7kNvgG3mn2l&_nc_oc=AdhIfWiIFLsGG91ODqDHtbljSNTHNDEpXGODNdTRTDGV-iJzXPYTiNjeFRwYcDqtyuE&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AX7wqvECy_8MqQAi2AMBMvJ&oh=00_AYE8P-SONihlIqLOqsjLLHcOYj-5FKMY_lO7mnFP9SyXQw&oe=67D35A35"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
