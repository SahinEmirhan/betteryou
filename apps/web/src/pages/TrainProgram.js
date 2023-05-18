import { Tabs, TabList, TabPanels, Tab, TabPanel, Container } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
function TrainProgram() {
    return (
<Container my={5}>
<TableContainer >
    
    <Table variant='striped' colorScheme='teal'>
    <Tabs variant='soft-rounded' colorScheme='green' >
            <TabList>
                <Tab>1. Gün</Tab>
                <Tab>2. Gün</Tab>
                <Tab>3. Gün</Tab>
            </TabList>
            <TabPanels>


                <TabPanel> 
                        <TableCaption>Antrenman Programı</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Hareket</Th>
                            <Th>Tekrar</Th>
                            <Th isNumeric>Set</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>Bench Press</Td>
                            <Td>10</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>
                        <Tr>
                            <Td>Incline Dumbbell Press</Td>
                            <Td>10</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>
                        <Tr>
                            <Td>Dumbbell Fly</Td>
                            <Td>8</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>

                        <Tr>
                            <Td>Decline Dumbbell Press</Td>
                            <Td>8</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>

                        <Tr>
                            <Td>Dumbbell Pullovers</Td>
                            <Td>8</Td>
                            <Td  isNumeric>3</Td>
                        </Tr>

                        <Tr>
                            <Td>Dumbbell Curl</Td>
                            <Td>8</Td>
                            <Td  isNumeric>3</Td>
                        </Tr>
                        </Tbody>
                        <Tfoot>
                        <Tr>
                            <Th>Hareket</Th>
                            <Th>Tekrar</Th>
                            <Th >Set</Th>
                        </Tr>
                        </Tfoot>
                </TabPanel>




                <TabPanel>
                <TableCaption>Antrenman Programı</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Hareket</Th>
                            <Th>Tekrar</Th>
                            <Th isNumeric>Set</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>Deadlift</Td>
                            <Td>10</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>
                        <Tr>
                            <Td>Military Press</Td>
                            <Td>10</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>
                        <Tr>
                            <Td>Prone Lateral Raises</Td>
                            <Td>10</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>

                        <Tr>
                            <Td>Lunges</Td>
                            <Td>12</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>

                        <Tr>
                            <Td>High Pull</Td>
                            <Td>8</Td>
                            <Td  isNumeric>3</Td>
                        </Tr>

                        <Tr>
                            <Td>Skull Crusher</Td>
                            <Td>8</Td>
                            <Td  isNumeric>3</Td>
                        </Tr>
                        </Tbody>
                        <Tfoot>
                        <Tr>
                            <Th>Hareket</Th>
                            <Th>Tekrar</Th>
                            <Th >Set</Th>
                        </Tr>
                        </Tfoot>
                </TabPanel>


                <TabPanel>
                <TableCaption>Antrenman Programı</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Hareket</Th>
                            <Th>Tekrar</Th>
                            <Th isNumeric>Set</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>Deep Squat</Td>
                            <Td>12</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>
                        <Tr>
                            <Td>Inclined Bench Press</Td>
                            <Td>10</Td>
                            <Td  isNumeric>4</Td>
                        </Tr>
                        <Tr>
                            <Td>Pullely Row</Td>
                            <Td>10</Td>
                            <Td  isNumeric>3</Td>
                        </Tr>

                        <Tr>
                            <Td>Lateral Raises</Td>
                            <Td>10</Td>
                            <Td  isNumeric>3</Td>
                        </Tr>

                        <Tr>
                            <Td>Pull-ups</Td>
                            <Td>10</Td>
                            <Td  isNumeric>3</Td>
                        </Tr>

                        <Tr>
                            <Td>Scott-bar Biceps Curl</Td>
                            <Td>10</Td>
                            <Td  isNumeric>3</Td>
                        </Tr>
                        </Tbody>
                        <Tfoot>
                        <Tr>
                            <Th>Hareket</Th>
                            <Th>Tekrar</Th>
                            <Th >Set</Th>
                        </Tr>
                        </Tfoot>
                </TabPanel>





    </TabPanels>
    </Tabs>
  </Table>
</TableContainer>
</Container>      
    );
  }
  
  export default TrainProgram;