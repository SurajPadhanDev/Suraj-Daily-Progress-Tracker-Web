// Main dashboard page assembling all components
import Head from 'next/head';
import Header from '../components/Header';
import MorningRoutine from '../components/MorningRoutine';
import Breakfast from '../components/Breakfast';
import StudySessions from '../components/StudySessions';
import Classes from '../components/Classes';
import SnackBreak from '../components/SnackBreak';
import Exercise from '../components/Exercise';
import DinnerAndNightStudy from '../components/DinnerAndNightStudy';
import Sleep from '../components/Sleep';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <Head>
        <title>Daily Progress Tracker</title>
        <meta 
          name="description" 
          content="Track your daily progress with beautiful UI and smooth animations" 
        />
      </Head>
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <MorningRoutine />
        <Breakfast />
        <StudySessions />
        <Classes />
        <SnackBreak />
        <Exercise />
        <DinnerAndNightStudy />
        <Sleep />
      </div>
    </div>
  );
}
