import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import React from 'react';
import siu from '../../asset/Image/graduate.jpg';
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Home = () => {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1 }}
            className="Boxheader"
        >
            <DrawerHeader />


            <div className="">
                <div className="">
                    <img src={siu} alt="" srcset="" className="img-fluid" />
                </div>
                <div className="mt-2 ml-20 mr-4">
                    <h1 className="text-xl font-mono font-bold">Welcome To Sylhet International University</h1>
                    <p className="text-base " >
                        The principal aim of the Sylhet International University (SIU) is to
                        provide high quality education at undergraduate and postgraduate levels
                        relevant to the needs of a dynamic society. The courses and curricula
                        are so designed as to enable a student to enter into the world of work
                        or pursue higher academic and professional goals with a sound academic
                        foundation. The medium of instructions in Sylhet International
                        University is English. The academic goal of the university is not just
                        to make the students pass the examination and get the degree but to
                        equip them with the means to become productive members of the community
                        and continue the practice of lifelong learning.
                    </p>
                </div>
            </div>
        </Box>
    );
};

export default Home;