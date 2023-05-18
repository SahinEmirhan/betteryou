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
function NutritionProgram() {
    return (
<Container my={5} width="150vh">
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
                        <TableCaption>Beslenme Programı</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Zaman</Th>
                            <Th>Yemek</Th>
                            <Th>G/Ml</Th>
                            <Th isNumeric>Kcal</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>Sabah</Td>
                            <Td>3 Yumurta</Td>
                            <Td>150</Td>
                            <Td  isNumeric>200</Td>
                        </Tr>
                        <Tr>
                            <Td>Sabah</Td>
                            <Td>Yulaf</Td>
                            <Td>100</Td>
                            <Td  isNumeric>170</Td>
                        </Tr>
                        <Tr>
                            <Td>Sabah</Td>
                            <Td>Süt</Td>
                            <Td>100</Td>
                            <Td  isNumeric>170</Td>
                        </Tr>

                        <Tr>
                            <Td>Öğle</Td>
                            <Td>Tavuk</Td>
                            <Td>100</Td>
                            <Td  isNumeric>100</Td>
                        </Tr>

                        <Tr>
                            <Td>Öğle</Td>
                            <Td>Pilav</Td>
                            <Td>150</Td>
                            <Td  isNumeric>350</Td>
                        </Tr>

                        <Tr>
                            <Td>Akşam</Td>
                            <Td>Ispanak</Td>
                            <Td>100</Td>
                            <Td  isNumeric>200</Td>
                        </Tr>

                        <Tr>
                            <Td>Akşam</Td>
                            <Td>Makarna</Td>
                            <Td>150</Td>
                            <Td  isNumeric>220</Td>
                        </Tr>
                        </Tbody>
                        <Tfoot>
                        <Tr>
                            <Th>Zaman</Th>
                            <Th>Yemek</Th>
                            <Th>G/Ml</Th>
                            <Th isNumeric>Kcal</Th>
                        </Tr>
                        </Tfoot>
                </TabPanel>




                <TabPanel> 
                        <TableCaption>Beslenme Programı</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Zaman</Th>
                            <Th>Yemek</Th>
                            <Th>G/Ml</Th>
                            <Th isNumeric>Kcal</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>Sabah</Td>
                            <Td>3 Yumurta</Td>
                            <Td>150</Td>
                            <Td  isNumeric>200</Td>
                        </Tr>
                        <Tr>
                            <Td>Sabah</Td>
                            <Td>Yulaf</Td>
                            <Td>100</Td>
                            <Td  isNumeric>170</Td>
                        </Tr>
                        <Tr>
                            <Td>Sabah</Td>
                            <Td>Portakal Suyu</Td>
                            <Td>100</Td>
                            <Td  isNumeric>170</Td>
                        </Tr>

                        <Tr>
                            <Td>Öğle</Td>
                            <Td>Tavuk</Td>
                            <Td>100</Td>
                            <Td  isNumeric>100</Td>
                        </Tr>

                        <Tr>
                            <Td>Öğle</Td>
                            <Td>Makarna</Td>
                            <Td>150</Td>
                            <Td  isNumeric>300</Td>
                        </Tr>

                        <Tr>
                            <Td>Akşam</Td>
                            <Td>Balık</Td>
                            <Td>250</Td>
                            <Td  isNumeric>730</Td>
                        </Tr>
                        </Tbody>
                        <Tfoot>
                        <Tr>
                            <Th>Zaman</Th>
                            <Th>Yemek</Th>
                            <Th>G/Ml</Th>
                            <Th isNumeric>Kcal</Th>
                        </Tr>
                        </Tfoot>
                </TabPanel>


                <TabPanel> 
                        <TableCaption>Beslenme Programı</TableCaption>
                        <Thead>
                        <Tr>
                            <Th>Zaman</Th>
                            <Th>Yemek</Th>
                            <Th>G/Ml</Th>
                            <Th isNumeric>Kcal</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>Sabah</Td>
                            <Td>3 Yumurta</Td>
                            <Td>150</Td>
                            <Td  isNumeric>200</Td>
                        </Tr>
                        <Tr>
                            <Td>Sabah</Td>
                            <Td>Fıstık Ezmesi</Td>
                            <Td>100</Td>
                            <Td  isNumeric>170</Td>
                        </Tr>
                        <Tr>
                            <Td>Sabah</Td>
                            <Td>Muz</Td>
                            <Td>100</Td>
                            <Td  isNumeric>170</Td>
                        </Tr>

                        <Tr>
                            <Td>Öğle</Td>
                            <Td>Antrikot</Td>
                            <Td>100</Td>
                            <Td  isNumeric>100</Td>
                        </Tr>

                        <Tr>
                            <Td>Öğle</Td>
                            <Td>Pilav</Td>
                            <Td>150</Td>
                            <Td  isNumeric>350</Td>
                        </Tr>

                        <Tr>
                            <Td>Akşam</Td>
                            <Td>Fasulye</Td>
                            <Td>150</Td>
                            <Td  isNumeric>230</Td>
                        </Tr>

                        <Tr>
                            <Td>Akşam</Td>
                            <Td>Makarna</Td>
                            <Td>150</Td>
                            <Td  isNumeric>220</Td>
                        </Tr>
                        </Tbody>
                        <Tfoot>
                        <Tr>
                            <Th>Zaman</Th>
                            <Th>Yemek</Th>
                            <Th>G/Ml</Th>
                            <Th isNumeric>Kcal</Th>
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
  
  export default NutritionProgram;