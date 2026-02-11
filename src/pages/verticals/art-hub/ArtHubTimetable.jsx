import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import DynamicHero from '../../../components/sections/DynamicHero';
import './ArtHubPages.scss';

const ArtHubTimetable = () => {
    const pageRef = useRef(null);
    const [filterDay, setFilterDay] = useState('all');
    const [filterProgram, setFilterProgram] = useState('all');

    const timetableData = [
        { day: 'Monday', time: '6:00 AM - 7:30 AM', program: 'Bharatanatyam - Advanced', instructor: 'Dr. Priya Krishnamurthy', level: 'Advanced', room: 'Studio A' },
        { day: 'Monday', time: '7:00 PM - 8:15 PM', program: 'Contemporary - Foundation', instructor: 'Arjun Mehta', level: 'Beginner', room: 'Studio B' },
        { day: 'Tuesday', time: '6:30 AM - 8:00 AM', program: 'Bharatanatyam - Intermediate', instructor: 'Dr. Priya Krishnamurthy', level: 'Intermediate', room: 'Studio A' },
        { day: 'Tuesday', time: '6:30 PM - 7:30 PM', program: 'Folk Dance - All Levels', instructor: 'Meera Patel', level: 'All Levels', room: 'Studio C' },
        { day: 'Wednesday', time: '6:00 AM - 7:30 AM', program: 'Bharatanatyam - Beginner', instructor: 'Dr. Priya Krishnamurthy', level: 'Beginner', room: 'Studio A' },
        { day: 'Wednesday', time: '7:00 PM - 8:00 PM', program: 'Creative Movement', instructor: 'Meera Patel', level: 'Open', room: 'Studio B' },
        { day: 'Thursday', time: '6:30 AM - 8:00 AM', program: 'Contemporary - Intermediate', instructor: 'Arjun Mehta', level: 'Intermediate', room: 'Studio B' },
        { day: 'Thursday', time: '7:00 PM - 8:30 PM', program: 'Bharatanatyam - Professional', instructor: 'Dr. Priya Krishnamurthy', level: 'Professional', room: 'Studio A' },
        { day: 'Friday', time: '6:00 AM - 7:00 AM', program: 'Creative Movement', instructor: 'Meera Patel', level: 'Open', room: 'Studio C' },
        { day: 'Friday', time: '6:30 PM - 8:00 PM', program: 'Contemporary - Advanced', instructor: 'Arjun Mehta', level: 'Advanced', room: 'Studio B' },
        { day: 'Saturday', time: '8:00 AM - 10:00 AM', program: 'Bharatanatyam - Workshop', instructor: 'Dr. Priya Krishnamurthy', level: 'All Levels', room: 'Main Hall' },
        { day: 'Saturday', time: '4:00 PM - 6:00 PM', program: 'Folk Dance - Cultural Immersion', instructor: 'Meera Patel', level: 'All Levels', room: 'Studio C' },
        { day: 'Sunday', time: '9:00 AM - 11:00 AM', program: 'Open Practice Session', instructor: 'Self-guided', level: 'All Levels', room: 'All Studios' },
        { day: 'Sunday', time: '5:00 PM - 7:00 PM', program: 'Performance Preparation', instructor: 'All Faculty', level: 'Selected Students', room: 'Main Hall' }
    ];

    const days = ['all', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const programs = ['all', 'Bharatanatyam', 'Contemporary', 'Folk Dance', 'Creative Movement'];

    const filteredData = timetableData.filter(slot => {
        const dayMatch = filterDay === 'all' || slot.day === filterDay;
        const programMatch = filterProgram === 'all' || slot.program.includes(filterProgram);
        return dayMatch && programMatch;
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-content > *', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            });
            gsap.from('.timetable-filters', {
                y: 15,
                opacity: 0,
                duration: 0.3,
                delay: 0.3,
                ease: 'power2.out',
                clearProps: 'all'
            });

            gsap.from('.timetable-wrapper', {
                y: 20,
                opacity: 0,
                duration: 0.4,
                delay: 0.4,
                ease: 'power2.out',
                clearProps: 'all'
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="art-hub-timetable" ref={pageRef}>
            <DynamicHero vertical="art-hub" className="page-hero">
                <div className="hero-content">
                    <span className="subtitle">Art Hub Timetable</span>
                    <h1>Plan Your Dance Journey</h1>
                    <p>Explore our comprehensive weekly schedule and find the perfect classes for your level and interests.</p>
                </div>
            </DynamicHero>

            <section className="timetable-content section">
                <div className="container">
                    <div className="timetable-filters">
                        <div className="filter-group">
                            <label>Filter by Day:</label>
                            <select value={filterDay} onChange={(e) => setFilterDay(e.target.value)}>
                                {days.map(day => (
                                    <option key={day} value={day}>
                                        {day === 'all' ? 'All Days' : day}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="filter-group">
                            <label>Filter by Program:</label>
                            <select value={filterProgram} onChange={(e) => setFilterProgram(e.target.value)}>
                                {programs.map(program => (
                                    <option key={program} value={program}>
                                        {program === 'all' ? 'All Programs' : program}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="results-count">
                            <span>{filteredData.length} classes found</span>
                        </div>
                    </div>

                    <div className="timetable-wrapper">
                        <div className="timetable-scroll">
                            <table className="timetable">
                                <thead>
                                    <tr>
                                        <th>Day</th>
                                        <th>Time</th>
                                        <th>Program</th>
                                        <th>Instructor</th>
                                        <th>Level</th>
                                        <th>Room</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((slot, index) => (
                                        <tr key={index} className="timetable-row">
                                            <td className="day">{slot.day}</td>
                                            <td className="time">{slot.time}</td>
                                            <td className="program">{slot.program}</td>
                                            <td className="instructor">{slot.instructor}</td>
                                            <td className="level">
                                                <span className={`level-badge ${slot.level.toLowerCase().replace(' ', '-')}`}>
                                                    {slot.level}
                                                </span>
                                            </td>
                                            <td className="room">{slot.room}</td>
                                            <td className="action">
                                                <button className="book-btn">Book</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="timetable-info">
                        <div className="info-grid">
                            <div className="info-card">
                                <h4>Class Duration</h4>
                                <p>Most classes are 60-90 minutes long, providing comprehensive training while respecting your schedule.</p>
                            </div>
                            <div className="info-card">
                                <h4>Booking Policy</h4>
                                <p>Classes can be booked up to 24 hours in advance. Cancellations must be made 2 hours before class time.</p>
                            </div>
                            <div className="info-card">
                                <h4>Trial Classes</h4>
                                <p>New students can book a trial class for ₹500 to experience our teaching methodology before enrollment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtHubTimetable;