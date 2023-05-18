import { Routes, Route } from 'react-router-dom';
import NutritionProgram from './pages/NutritionProgram';
import TrainProgram from './pages/TrainProgram';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/nutritionProgram" element={<NutritionProgram />} />
          <Route path="/trainProgram" element={<TrainProgram />} />
       </Routes>
    </>
 );
};

export default App;
