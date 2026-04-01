import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Academy = ({ onBack }) => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const contentRef = useRef(null);

    const academyContent = [
        {
            id: 1,
            title: "INTRODUCTION TO FITNESS",
            content: `
                <h3>1.1 Definition of Fitness</h3>
                <p>Fitness can be defined as the ability of an individual to perform daily physical activities efficiently and effectively without undue fatigue, while maintaining sufficient energy reserves for leisure activities and unforeseen emergencies. It is a multidimensional concept that includes physical, mental, and emotional well-being.</p>
                <p>From a scientific perspective, fitness represents the optimal functioning of the body’s physiological systems, including the cardiovascular, muscular, respiratory, and nervous systems. A physically fit individual is not only capable of performing physical tasks but also demonstrates resilience against stress, illness, and fatigue.</p>

                <h3>1.2 Historical Background of Fitness</h3>
                <p>The concept of fitness has evolved significantly over time. In ancient civilizations, physical fitness was essential for survival, hunting, and warfare. In societies such as ancient Greece, physical training was highly valued and closely linked to intellectual development.</p>
                <p>In modern times, fitness has shifted from survival needs to health, aesthetics, and performance. With increasing sedentary lifestyles, structured exercise programs and gym-based training have become essential for maintaining health and preventing lifestyle-related diseases.</p>

                <h3>1.3 Components of Physical Fitness</h3>
                <p>Physical fitness is composed of several key components, each contributing to overall performance and health.</p>
                <p><strong>1.3.1 Cardiorespiratory Endurance:</strong> Cardiorespiratory endurance refers to the ability of the heart, lungs, and blood vessels to supply oxygen to working muscles during prolonged physical activity. Efficient oxygen delivery allows the body to sustain activities such as running, cycling, and swimming over extended periods. Improved cardiorespiratory endurance reduces the risk of cardiovascular diseases and enhances overall stamina.</p>
                <p><strong>1.3.2 Muscular Strength:</strong> Muscular strength is defined as the maximum force that a muscle or group of muscles can exert in a single effort. It is essential for lifting heavy objects, performing resistance exercises, and maintaining structural stability. Strength is typically developed through resistance training using weights, machines, or bodyweight exercises.</p>
                <p><strong>1.3.3 Muscular Endurance:</strong> Muscular endurance is the ability of a muscle to perform repeated contractions over a period of time without fatigue. It is important for activities that require sustained effort, such as long-distance running or repetitive movements in daily life.</p>
                <p><strong>1.3.4 Flexibility:</strong> Flexibility refers to the range of motion available at a joint. It depends on the elasticity of muscles, tendons, and ligaments. Adequate flexibility improves movement efficiency, posture, and reduces the risk of injury.</p>
                <p><strong>1.3.5 Body Composition:</strong> Body composition is the proportion of fat mass and fat-free mass (muscle, bone, water) in the body. Maintaining a healthy body composition is crucial for both performance and health. Excess body fat is associated with increased risk of metabolic and cardiovascular diseases.</p>

                <h3>1.4 Skill-Related Components of Fitness</h3>
                <p>In addition to health-related components, fitness also includes skill-related components:</p>
                <ul>
                    <li><strong>Agility:</strong> Ability to change direction quickly</li>
                    <li><strong>Balance:</strong> Ability to maintain body stability</li>
                    <li><strong>Coordination:</strong> Ability to perform smooth and efficient movements</li>
                    <li><strong>Power:</strong> Combination of strength and speed</li>
                    <li><strong>Reaction Time:</strong> Speed of response to stimuli</li>
                    <li><strong>Speed:</strong> Ability to move quickly</li>
                </ul>
                <p>These components are especially important for athletes and sports performance.</p>

                <h3>1.5 Importance of Physical Fitness</h3>
                <p>Regular physical activity and maintaining fitness provide a wide range of benefits:</p>
                <p><strong>1.5.1 Physical Health Benefits:</strong></p>
                <ul>
                    <li>Improves heart function and circulation</li>
                    <li>Enhances muscle strength and endurance</li>
                    <li>Strengthens bones and joints</li>
                    <li>Regulates body weight</li>
                    <li>Improves metabolic efficiency</li>
                </ul>
                <p><strong>1.5.2 Mental Health Benefits:</strong></p>
                <ul>
                    <li>Reduces stress and anxiety</li>
                    <li>Improves mood and emotional stability</li>
                    <li>Enhances cognitive function and focus</li>
                </ul>
                <p><strong>1.5.3 Social and Lifestyle Benefits:</strong></p>
                <ul>
                    <li>Increases confidence and self-esteem</li>
                    <li>Promotes discipline and consistency</li>
                    <li>Improves overall quality of life</li>
                </ul>

                <h3>1.6 Principles of Fitness Training</h3>
                <p>Scientific training is based on fundamental principles that guide program design and progression.</p>
                <p><strong>1.6.1 Overload Principle:</strong> The body must be subjected to stress beyond its normal level to stimulate adaptation. Without sufficient overload, improvement does not occur.</p>
                <p><strong>1.6.2 Progression Principle:</strong> The intensity, volume, or complexity of exercise must gradually increase to continue achieving results.</p>
                <p><strong>1.6.3 Specificity Principle:</strong> Training adaptations are specific to the type of activity performed. For example, endurance training improves stamina, while resistance training increases strength.</p>
                <p><strong>1.6.4 Recovery Principle:</strong> Recovery is essential for repairing tissues and restoring energy. Without adequate rest, overtraining and injuries may occur.</p>
                <p><strong>1.6.5 Reversibility Principle:</strong> Fitness gains are reversible. If training is stopped, the body gradually loses its adaptations.</p>
                <p><strong>1.6.6 Individuality Principle:</strong> Each individual responds differently to training based on genetics, age, gender, and fitness level.</p>

                <h3>1.7 Types of Fitness Training</h3>
                <p>A comprehensive fitness program includes different types of training:</p>
                <ul>
                    <li><strong>1.7.1 Strength Training:</strong> Focuses on increasing muscle strength and size through resistance exercises.</li>
                    <li><strong>1.7.2 Cardiovascular Training:</strong> Improves heart and lung function through activities like running, cycling, and swimming.</li>
                    <li><strong>1.7.3 Flexibility Training:</strong> Enhances joint mobility and reduces muscle stiffness through stretching exercises.</li>
                    <li><strong>1.7.4 Functional Training:</strong> Improves movement patterns used in daily life and sports.</li>
                </ul>

                <h3>1.8 Role of Lifestyle in Fitness</h3>
                <p>Fitness is not achieved through exercise alone. Lifestyle factors play a crucial role:</p>
                <ul>
                    <li><strong>Nutrition:</strong> Provides energy and nutrients for growth and recovery</li>
                    <li><strong>Sleep:</strong> Essential for recovery and hormonal balance</li>
                    <li><strong>Hydration:</strong> Supports all physiological functions</li>
                    <li><strong>Stress Management:</strong> Prevents negative effects on performance and health</li>
                </ul>

                <h3>1.9 Common Misconceptions About Fitness</h3>
                <ul>
                    <li>Fitness is only about appearance</li>
                    <li>Cardio alone is enough for fat loss</li>
                    <li>Lifting weights makes everyone bulky</li>
                    <li>Supplements are necessary for results</li>
                </ul>
                <p>Understanding these misconceptions helps individuals adopt a more scientific approach to fitness.</p>

                <h3>1.10 Fitness as a Lifelong Process</h3>
                <p>Fitness should be viewed as a continuous journey rather than a temporary goal. Long-term commitment to physical activity and healthy habits leads to sustainable results and improved quality of life.</p>

                <div class="chapter-summary">
                    <p><strong>✅ Chapter Summary:</strong> Fitness is a multidimensional concept that includes physical, mental, and emotional well-being. It is built on various components such as strength, endurance, flexibility, and body composition. Scientific principles like overload, progression, and recovery guide effective training. Ultimately, fitness is a lifelong commitment supported by proper lifestyle choices.</p>
                </div>
            `
        },
        {
            id: 2,
            title: "HUMAN BODY & MUSCLE PHYSIOLOGY",
            content: `
                <h3>2.1 Introduction to Human Body Systems in Fitness</h3>
                <p>The human body is a complex biological system composed of multiple interrelated systems that work together to support movement, energy production, and overall performance. In the context of fitness, the most important systems include:</p>
                <ul>
                    <li><strong>Muscular System:</strong> responsible for movement and force production</li>
                    <li><strong>Skeletal System:</strong> provides structure and support</li>
                    <li><strong>Nervous System:</strong> controls and coordinates muscle activity</li>
                    <li><strong>Cardiovascular System:</strong> delivers oxygen and nutrients</li>
                    <li><strong>Respiratory System:</strong> facilitates oxygen intake and carbon dioxide removal</li>
                </ul>
                <p>Understanding these systems is essential for designing effective training programs and improving physical performance.</p>

                <h3>2.2 Structure of Skeletal Muscle</h3>
                <p>Skeletal muscles are voluntary muscles attached to bones, responsible for body movement. They are composed of several hierarchical structures:</p>
                <ul>
                    <li><strong>Muscle:</strong> made up of bundles called fascicles</li>
                    <li><strong>Fascicles:</strong> made up of muscle fibers</li>
                    <li><strong>Muscle Fibers:</strong> individual muscle cells</li>
                    <li><strong>Myofibrils:</strong> structures inside fibers containing contractile proteins</li>
                </ul>
                <p>The primary proteins involved in muscle contraction are:</p>
                <ul>
                    <li><strong>Actin:</strong> thin filament</li>
                    <li><strong>Myosin:</strong> thick filament</li>
                </ul>
                <p>These proteins interact to produce muscle contraction.</p>

                <h3>2.3 Sliding Filament Theory (Muscle Contraction Mechanism)</h3>
                <p>Muscle contraction occurs through a process known as the sliding filament theory. When a muscle is stimulated by the nervous system:</p>
                <ol>
                    <li style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.7);">A nerve impulse reaches the muscle fiber</li>
                    <li style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.7);">Calcium ions are released within the muscle</li>
                    <li style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.7);">Myosin heads attach to actin filaments</li>
                    <li style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.7);">The filaments slide over each other</li>
                    <li style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.7);">The muscle shortens and generates force</li>
                </ol>
                <p>This process requires energy in the form of <strong>ATP (adenosine triphosphate)</strong>. Without ATP, muscles cannot contract effectively, which highlights the importance of energy systems in training.</p>

                <h3>2.4 Types of Muscle Tissue</h3>
                <p>The human body contains three types of muscle tissue:</p>
                <p><strong>2.4.1 Skeletal Muscle:</strong> Voluntary control, responsible for movement and exercise. Main focus in fitness training.</p>
                <p><strong>2.4.2 Cardiac Muscle:</strong> Found in the heart, works involuntarily, and pumps blood throughout the body.</p>
                <p><strong>2.4.3 Smooth Muscle:</strong> Found in internal organs, and controls involuntary movements like digestion.</p>

                <h3>2.5 Types of Muscle Fibers</h3>
                <p>Muscle fibers are classified based on their contraction speed and energy system:</p>
                <p><strong>2.5.1 Type I Fibers (Slow-Twitch):</strong> High endurance capacity, fatigue-resistant. Used in long-duration activities like running.</p>
                <p><strong>2.5.2 Type II Fibers (Fast-Twitch):</strong></p>
                <ul>
                    <li><strong>Type IIa:</strong> Moderate endurance and strength. Used in mixed activities.</li>
                    <li><strong>Type IIb (or IIx):</strong> High force and power. Fatigue quickly. Used in explosive movements like sprinting and heavy lifting.</li>
                </ul>
                <p>Training can influence how these fibers develop, but genetics also play a major role.</p>

                <h3>2.6 Muscle Hypertrophy (Muscle Growth)</h3>
                <p>Muscle hypertrophy refers to the increase in muscle size due to training. It occurs through three main mechanisms:</p>
                <p><strong>2.6.1 Mechanical Tension:</strong> Heavy resistance creates tension in muscle fibers, stimulating growth.</p>
                <p><strong>2.6.2 Muscle Damage:</strong> Microscopic tears occur during exercise, which are repaired during recovery, leading to growth.</p>
                <p><strong>2.6.3 Metabolic Stress:</strong> Build-up of metabolites (like lactic acid) during training contributes to muscle growth.</p>

                <h3>2.7 Role of the Nervous System</h3>
                <p>The nervous system plays a crucial role in muscle activation and coordination:</p>
                <ul>
                    <li>Sends signals from the brain to muscles</li>
                    <li>Controls movement efficiency</li>
                    <li>Improves strength through better muscle recruitment</li>
                </ul>
                <p>As training progresses, the nervous system becomes more efficient, leading to improved performance even before visible muscle growth occurs.</p>

                <h3>2.8 Energy Systems in the Body</h3>
                <p>The body uses different energy systems to produce ATP:</p>
                <p><strong>2.8.1 ATP-PC System:</strong> Provides immediate energy, used in short, explosive activities (0–10 seconds).</p>
                <p><strong>2.8.2 Glycolytic System:</strong> Breaks down carbohydrates for energy, used in moderate-intensity activities (10–60 seconds).</p>
                <p><strong>2.8.3 Oxidative System:</strong> Uses oxygen to produce energy, used in long-duration activities.</p>
                <p>Understanding these systems helps in designing effective training programs.</p>

                <h3>2.9 Role of Hormones in Muscle Growth</h3>
                <p>Hormones regulate muscle development, recovery, and performance.</p>
                <ul>
                    <li><strong>2.9.1 Testosterone:</strong> Increases muscle mass and strength, enhances protein synthesis.</li>
                    <li><strong>2.9.2 Growth Hormone:</strong> Promotes tissue repair and recovery, supports fat metabolism.</li>
                    <li><strong>2.9.3 Insulin:</strong> Helps transport nutrients into muscle cells, supports recovery and growth.</li>
                </ul>

                <h3>2.10 Adaptation to Training</h3>
                <p>The human body adapts to physical stress through:</p>
                <ul>
                    <li>Increased muscle size</li>
                    <li>Improved strength</li>
                    <li>Enhanced endurance</li>
                    <li>Better coordination</li>
                </ul>
                <p>This adaptation is the result of consistent training combined with proper nutrition and recovery.</p>

                <h3>2.11 Common Mistakes in Muscle Training</h3>
                <ul>
                    <li>Ignoring proper form</li>
                    <li>Overtraining without recovery</li>
                    <li>Poor nutrition</li>
                    <li>Lack of progressive overload</li>
                </ul>
                <p>Avoiding these mistakes ensures safe and effective progress.</p>

                <h3>2.12 Practical Application in Fitness Training</h3>
                <p>Understanding muscle physiology helps trainers and individuals:</p>
                <ul>
                    <li>Design effective workout programs</li>
                    <li>Target specific muscle groups</li>
                    <li>Prevent injuries</li>
                    <li>Improve performance</li>
                </ul>
                <p>Scientific knowledge allows for smarter training rather than just harder training.</p>

                <div class="chapter-summary">
                    <p><strong>✅ Chapter Summary:</strong> The human body is a highly coordinated system where muscles, nerves, and energy systems work together to produce movement. Muscle growth occurs through hypertrophy driven by mechanical tension, muscle damage, and metabolic stress. Understanding muscle structure, fiber types, and energy systems is essential for effective and safe training.</p>
                </div>
            `
        },
        {
            id: 3,
            title: "EXERCISE SCIENCE & TRAINING PRINCIPLES",
            content: `
                <h3>3.1 Definition of Exercise Science</h3>
                <p>Exercise science studies how the body responds and adapts to physical activity. It combines physiology, biomechanics, and psychology to improve performance.</p>

                <h3>3.2 Types of Exercise</h3>
                <ul>
                    <li><strong>Aerobic Exercise:</strong> Uses oxygen as the primary energy source (e.g., running, cycling, swimming).</li>
                    <li><strong>Anaerobic Exercise:</strong> High-intensity activities that occur without the immediate use of oxygen (e.g., weightlifting, sprinting, HIIT).</li>
                </ul>

                <h3>3.3 Training Variables</h3>
                <p>Success in training depends on managing these four key variables:</p>
                <ul>
                    <li><strong>Volume:</strong> The total amount of work performed (e.g., total sets x reps x weight).</li>
                    <li><strong>Intensity:</strong> The load or level of difficulty (e.g., % of 1-rep max or RPE - Rate of Perceived Exertion).</li>
                    <li><strong>Frequency:</strong> The number of training sessions performed per week or per muscle group.</li>
                    <li><strong>Rest:</strong> The critical recovery time between sets or sessions, essential for performance reset and central nervous system recovery.</li>
                </ul>

                <h3>3.4 Progressive Overload</h3>
                <p>Gradually increasing the stress placed on the body during exercise is the only way to stimulate continuous physiological adaptation and growth. This can be achieved by increasing resistance (weights), volume (reps/sets), or intensity.</p>

                <h3>3.5 Periodization</h3>
                <p>Periodization involves dividing a long-term training program into specific phases (macro-cycles, meso-cycles, and micro-cycles) such as hypertrophy, strength, peaking, and deload. This systematic approach helps manage cumulative fatigue and avoids performance plateaus.</p>

                <div class="chapter-summary">
                    <p><strong>✅ Chapter Summary:</strong> Exercise science provides the framework for scientific training. By understanding aerobic vs. anaerobic energy systems and managing key training variables, individuals can apply progressive overload and periodization to achieve sustainable and safe performance gains.</p>
                </div>
            `
        },
        {
            id: 4,
            title: "NUTRITION SCIENCE FOR FITNESS",
            content: `
                <h3>4.1 Introduction to Nutrition in Fitness</h3>
                <p>Nutrition is the foundation of all fitness goals, whether it is muscle gain, fat loss, or performance improvement. Exercise provides the stimulus for change, but nutrition provides the necessary fuel and building materials for the body to adapt and grow.</p>
                <p>From a scientific perspective, nutrition involves the intake, digestion, absorption, and utilization of nutrients by the body. Proper nutrition ensures optimal energy production, tissue repair, hormonal balance, and overall health.</p>

                <h3>4.2 Macronutrients: The Primary Nutrients</h3>
                <p>Macronutrients are nutrients required in large amounts and are the main sources of energy for the body. They include proteins, carbohydrates, and fats.</p>

                <p><strong>4.2.1 Protein:</strong> Protein is composed of amino acids, which are the building blocks of muscle tissue. It plays a crucial role in muscle repair and growth, enzyme and hormone production, and immune system support. Resistance training creates micro-damage, and protein repairs these fibers to build stronger muscles.</p>
                <ul>
                    <li><strong>Animal sources:</strong> Chicken, fish, eggs, dairy.</li>
                    <li><strong>Plant sources:</strong> Lentils, beans, nuts, soy.</li>
                </ul>

                <p><strong>4.2.2 Carbohydrates:</strong> These are the body’s primary energy source. They are broken down into glucose and stored in muscles and liver as glycogen. During high-intensity workouts, glycogen is the primary fuel source.</p>
                <ul>
                    <li><strong>Simple carbs:</strong> Quick energy (fruits, honey).</li>
                    <li><strong>Complex carbs:</strong> Sustained energy (oats, brown rice, potatoes).</li>
                </ul>

                <p><strong>4.2.3 Fats:</strong> Essential for long-term energy and hormonal balance (including testosterone). They support brain function and the absorption of fat-soluble vitamins (A, D, E, K).</p>
                <ul>
                    <li><strong>Sources:</strong> Nuts, seeds, olive oil, avocado, fatty fish.</li>
                </ul>

                <h3>4.3 Micronutrients: Essential Support Nutrients</h3>
                <p>Vitamins and minerals are required in smaller amounts but are critical for proper body function:</p>
                <ul>
                    <li><strong>Vitamins:</strong> Support metabolic processes and immunity.</li>
                    <li><strong>Minerals:</strong> Help in bone health, muscle contraction (electrolytes), and nerve function.</li>
                </ul>

                <h3>4.4 Energy Balance and Caloric Intake</h3>
                <p>Energy balance refers to the relationship between calories consumed and calories burned:</p>
                <ul>
                    <li><strong>Caloric Surplus:</strong> Intake > Burn. Leads to weight gain/muscle growth.</li>
                    <li><strong>Caloric Deficit:</strong> Intake < Burn. Leads to fat loss.</li>
                    <li><strong>Maintenance:</strong> Intake = Burn. Body weight remains stable.</li>
                </ul>

                <h3>4.5 Digestion and Nutrient Absorption</h3>
                <p>The body must break down food into usable building blocks:</p>
                <ul>
                    <li>Proteins → <strong>Amino Acids</strong></li>
                    <li>Carbohydrates → <strong>Glucose</strong></li>
                    <li>Fats → <strong>Fatty Acids</strong></li>
                </ul>

                <h3>4.6 Nutrient Timing</h3>
                <p>Strategically consuming nutrients to optimize performance and recovery:</p>
                <p><strong>4.6.1 Pre-Workout:</strong> Provides energy for training (carbohydrates + moderate protein).</p>
                <p><strong>4.6.2 Post-Workout:</strong> Accelerates recovery and muscle repair (protein + carbohydrates).</p>

                <h3>4.7 Hydration and Fluid Balance</h3>
                <p>Water is essential for every physiological process. During exercise, water lost through sweat must be replaced to maintain core temperature, support muscle function, and prevent fatigue/cramps.</p>

                <h3>4.8 Role of Nutrition in Recovery</h3>
                <p>Recovery isn't just rest; it's a nutritional process. Protein repairs tissue, carbohydrates replenish glycogen, and fluids restore hydration balance.</p>

                <h3>4.9 Common Nutritional Mistakes</h3>
                <ul>
                    <li>Skipping meals or extreme restriction.</li>
                    <li>Inadequate protein intake.</li>
                    <li>Excessive processed food/junk consumption.</li>
                    <li>Dehydration.</li>
                    <li>Relying solely on supplements rather than whole foods.</li>
                </ul>

                <h3>4.11 Nutrition for Different Goals</h3>
                <ul>
                    <li><strong>Fat Loss:</strong> Caloric deficit + High protein + Controlled carbohydrates.</li>
                    <li><strong>Muscle Gain:</strong> Caloric surplus + High protein + High carbohydrates.</li>
                    <li><strong>Maintenance:</strong> Balanced calories + Moderate macronutrient distribution.</li>
                </ul>

                <div class="chapter-summary">
                    <p><strong>✅ Chapter Summary:</strong> Nutrition is the fuel that powers your training and the raw material that builds your body. Proper management of macronutrients, micronutrients, hydration, and energy balance is essential for achieving any fitness goal safely and effectively.</p>
                </div>
            `
        },
        {
            id: 5,
            title: "PROTEIN METABOLISM & MUSCLE BUILDING",
            content: `
                <h3>5.1 Introduction to Protein in Fitness</h3>
                <p>Protein is one of the most essential macronutrients in the human body, especially in the context of fitness and muscle development. It plays a central role in muscle repair, growth, enzyme production, hormone regulation, and immune function. Resistance exercise creates microscopic damage in muscle fibers, and the body uses protein to rebuild them stronger and larger—a process known as <strong>muscle hypertrophy</strong>.</p>

                <h3>5.2 Structure of Protein</h3>
                <p>Proteins are made up of smaller units called <strong>amino acids</strong>, often referred to as the building blocks of life.</p>
                <ul>
                    <li><strong>Essential Amino Acids (EAAs):</strong> Must be obtained through diet as the body cannot produce them.</li>
                    <li><strong>Non-Essential Amino Acids:</strong> Can be synthesized by the body internally.</li>
                    <li><strong>Conditionally Essential:</strong> Required specifically during periods of extreme physiological stress or illness.</li>
                </ul>
                <p>Among these, <strong>Leucine</strong> plays a key role in triggering the molecular pathway for muscle protein synthesis (MPS).</p>

                <h3>5.3 Protein Digestion and Absorption</h3>
                <p>Protein digestion begins in the stomach (broken down by pepsin and stomach acid) and continues in the small intestine. Amino acids are then absorbed into the bloodstream and transported to tissues for muscle repair, enzyme production, or energy use if needed.</p>

                <h3>5.4 Muscle Protein Synthesis (MPS)</h3>
                <p>MPS is the process of building new muscle proteins. Muscle growth depends on the balance between two cellular states:</p>
                <ul>
                    <li><strong>MPS (Muscle Protein Synthesis):</strong> The building state.</li>
                    <li><strong>MPB (Muscle Protein Breakdown):</strong> The breakdown state.</li>
                </ul>
                <p>Growth occurs only when <strong>MPS > MPB</strong>. Resistance training and high-quality protein intake are the two most powerful stimulators of the MPS response.</p>

                <h3>5.5 Daily Protein Requirements</h3>
                <p>Requirements scale based on activity level and specific fitness goals:</p>
                <ul>
                    <li><strong>Sedentary individuals:</strong> ~0.8g per kg of body weight.</li>
                    <li><strong>Active/Maintenance:</strong> ~1.2g - 1.5g per kg of body weight.</li>
                    <li><strong>Strength/Hypertrophy goals:</strong> ~1.6g - 2.2g per kg (or higher during aggressive caloric deficits).</li>
                </ul>

                <h3>5.6 Protein Quality and Biological Value</h3>
                <p>Quality is determined by the amino acid profile and digestibility. <strong>High-quality proteins</strong> (Complete proteins) contain all essential amino acids and are easily absorbed. <strong>Low-quality proteins</strong> (Incomplete) may lack one or more EAAs but can be combined (e.g., rice and beans) to reach a complete profile.</p>

                <h3>5.8 Protein Timing and Distribution</h3>
                <p>Distributing protein intake evenly (e.g., every 3-5 hours) throughout the day maintains a steady supply of amino acids, supporting continuous muscle repair. <strong>Pre-workout protein</strong> helps reduce breakdown during training, while <strong>post-workout protein</strong> maximizes the recovery window.</p>

                <h3>5.9 Role of Protein in Fat Loss</h3>
                <p>Protein is critical during fat loss phases because it preserves lean muscle mass, increases satiety (feeling of fullness), and has a higher <strong>Thermic Effect of Food (TEF)</strong>, meaning the body burns more energy digesting it compared to fats or carbohydrates.</p>

                <h3>5.11 Protein Supplements</h3>
                <p>Supplements are tools for convenience, not magic solutions:</p>
                <ul>
                    <li><strong>Whey Protein:</strong> Fast-digesting, ideal for immediate post-workout recovery.</li>
                    <li><strong>Casein Protein:</strong> Slow-digesting, ideal for sustained release before sleep.</li>
                    <li><strong>Plant-based blends:</strong> Multi-source options (e.g., Pea/Rice) for those avoiding dairy.</li>
                </ul>

                <h3>5.13 Common Myths About Protein</h3>
                <ul>
                    <li><strong>"High protein damages kidneys":</strong> Scientific research shows this is false for healthy individuals; kidneys are naturally designed to process nitrogen.</li>
                    <li><strong>"More protein always means more muscle":</strong> False; there is a ceiling to how much protein can stimulate MPS in one sitting (usually ~20-40g).</li>
                    <li><strong>"Supplements are better than whole food":</strong> False; whole foods provide essential micronutrients and better overall satiety.</li>
                </ul>

                <div class="chapter-summary">
                    <p><strong>✅ Chapter Summary:</strong> Protein is the fundamental nutrient for muscle growth, recovery, and overall health. It is made up of amino acids that support muscle protein synthesis. Proper intake, timing, and quality of protein are essential for maximizing fitness results. When combined with resistance training and adequate recovery, protein plays a key role in achieving muscle hypertrophy and maintaining lean body mass.</p>
                </div>
            `
        },
        {
            id: 6,
            title: "SUPPLEMENTATION",
            content: `
                <h3>6.1 Introduction to Supplements</h3>
                <p>Supplementation refers to the use of additional nutrients or compounds to support diet, improve performance, and enhance recovery. While whole foods should always be the primary source of nutrition, supplements can help fill nutritional gaps, especially in high-demand training environments.</p>
                <h3>6.2 Types of Supplements</h3>
                <p>Common categories include protein supplements, performance enhancers (like creatine), recovery aids (like BCAAs), and general health supplements (multivitamins, fish oils). Each serves a specific purpose in a well-rounded fitness regimen.</p>
                <h3>6.3 Role in Fitness</h3>
                <p>Supplements can improve workout performance, speed up recovery, and help individuals meet their nutritional requirements, especially when whole foods are insufficient during high-volume training phases.</p>
                <h3>6.4 Limitations</h3>
                <p>Supplements are not substitutes for proper diet and training. Overuse or misuse can lead to ineffective results or potential health issues. Always prioritize "real food" first.</p>
            `
        },
        {
            id: 7,
            title: "🥤 WHEY PROTEIN",
            content: `
                <h3>7.1 Definition</h3>
                <p>Whey protein is a high-quality protein derived from milk during the cheese-making process. It is exceptionally rich in essential amino acids and leucine, making it ideal for muscle repair.</p>
                <h3>7.2 Types</h3>
                <ul>
                    <li><strong>Concentrate:</strong> Contains some fats and lactose; usually 70-80% protein.</li>
                    <li><strong>Isolate:</strong> Processed to remove most fats and lactose; 90%+ protein.</li>
                    <li><strong>Hydrolysate:</strong> "Pre-digested" for even faster absorption.</li>
                </ul>
                <h3>7.3 Benefits</h3>
                <p>Fast absorption allows for a rapid spike in blood amino acid levels, making it the perfect post-workout recovery tool. It is also an extremely convenient way to hit daily protein targets.</p>
                <h3>7.4 Usage</h3>
                <p>Best consumed post-workout or when dietary protein intake is insufficient to meet your daily requirements based on your body weight and activity level.</p>
            `
        },
        {
            id: 8,
            title: "⚡ CREATINE",
            content: `
                <h3>8.1 Definition</h3>
                <p>Creatine is a naturally occurring compound found in muscle cells. It is one of the most researched and effective supplements in the world for increasing strength and power output.</p>
                <h3>8.2 Mechanism</h3>
                <p>It increases the body's stores of phosphocreatine, which is used to produce <strong>ATP</strong>—the primary energy source for heavy lifting and high-intensity exercise.</p>
                <h3>8.3 Benefits</h3>
                <ul>
                    <li>Increased strength and power.</li>
                    <li>Improved high-intensity exercise performance.</li>
                    <li>Enhanced muscle cell hydration (volumization).</li>
                </ul>
                <h3>8.4 Safety</h3>
                <p>Creatine is extremely safe when used correctly at the recommended dosage. Ensuring proper hydration is essential while supplementing with creatine.</p>
            `
        },
        {
            id: 9,
            title: "🔥 PRE-WORKOUT SUPPLEMENTS",
            content: `
                <h3>9.1 Purpose</h3>
                <p>Pre-workout supplements are designed to increase energy, focus, and blood flow (pumps) before a training session begins.</p>
                <h3>9.2 Ingredients</h3>
                <ul>
                    <li><strong>Caffeine:</strong> For energy and metabolic focus.</li>
                    <li><strong>Beta-alanine:</strong> Helps buffer lactic acid and improves endurance during high-intensity sets.</li>
                    <li><strong>Nitric Oxide Boosters:</strong> (Like Citrulline Malate) to improve vasodilation and nutrient delivery.</li>
                </ul>
                <h3>9.3 Effects</h3>
                <p>Enhances workout intensity and reduces the perception of fatigue, allowing for more volume and better results. Not necessary for beginners; should be used strategically.</p>
            `
        },
        {
            id: 10,
            title: "🧬 NATURAL VS ENHANCED",
            content: `
                <h3>10.1 Natural Training</h3>
                <p>Natural bodybuilding relies entirely on scientific training, optimized nutrition, and disciplined recovery without the use of pharmaceutical performance-enhancing drugs (PEDs).</p>
                <h3>10.2 Enhanced Training</h3>
                <p>Enhanced training involves the use of anabolic substances to accelerate results. However, this path carries significant health risks, including hormonal imbalances, cardiovascular strain, and organ damage.</p>
                <h3>10.4 Recommendation</h3>
                <p><strong>FedFit recommends natural training.</strong> It is safer, healthier, and the results achieved through consistent hard work are more sustainable over a lifetime.</p>
            `
        },
        {
            id: 11,
            title: "🛌 MUSCLE RECOVERY",
            content: `
                <h3>11.1 Importance</h3>
                <p>Muscles do not grow while you are lifting weights; they grow while you are <strong>resting</strong>. Recovery is the phase where the body repairs the micro-tears caused by training.</p>
                <h3>11.2 Factors in Recovery</h3>
                <ul>
                    <li>7–9 hours of quality sleep for hormonal reset.</li>
                    <li>Adequate caloric and protein intake for tissue repair.</li>
                    <li>Rest days to prevent Central Nervous System (CNS) fatigue.</li>
                </ul>
                <h3>11.3 Techniques</h3>
                <p>Stretching, proper hydration, and active recovery (like light walking) help improve circulation and speed up the removal of waste products from the muscles.</p>
            `
        },
        {
            id: 12,
            title: "⚠️ INJURY PREVENTION",
            content: `
                <h3>12.1 Causes</h3>
                <p>Injuries usually stem from poor lifting form, ego-lifting (weights too heavy), inadequate warm-ups, or chronic overtraining.</p>
                <h3>12.2 Prevention</h3>
                <ul>
                    <li><strong>Proper Technique:</strong> Always prioritize form over the weight on the bar.</li>
                    <li><strong>Gradual Progression:</strong> Don't jump in intensity too quickly.</li>
                    <li><strong>Adequate Recovery:</strong> Listen to your body's biofeedback.</li>
                </ul>
                <p>Prevention ensures long-term consistency, which is the ultimate driver of fitness results.</p>
            `
        },
        {
            id: 13,
            title: "🔥 FAT LOSS SCIENCE",
            content: `
                <h3>13.1 Mechanism</h3>
                <p>Fat loss is governed by the laws of thermodynamics: you must be in a <strong>caloric deficit</strong> (burning more energy than you consume).</p>
                <h3>13.2 Methods</h3>
                <p>Dietary control is the primary driver, while cardio and strength training increase daily energy expenditure. Strength training is vital during fat loss to preserve lean muscle mass.</p>
                <h3>13.3 Sustainability</h3>
                <p>Consistency over time is key. "Crash diets" are not sustainable. A moderate, consistent deficit leads to the best long-term results.</p>
            `
        },
        {
            id: 14,
            title: "🍖 MUSCLE GAIN",
            content: `
                <h3>14.1 Mechanism</h3>
                <p>Muscle hypertrophy occurs through a combination of progressive resistance training and an anabolic environment created by nutrition.</p>
                <h3>14.2 Requirements</h3>
                <ul>
                    <li><strong>Caloric Surplus:</strong> Providing extra energy for building new tissue.</li>
                    <li><strong>High Protein Intake:</strong> Raw materials for muscle repair.</li>
                    <li><strong>Resistance Training:</strong> The stimulus for growth.</li>
                </ul>
                <h3>14.3 Key Principle</h3>
                <p>Progressive overload is essential. You must force the muscle to adapt to increasing demands over months and years.</p>
            `
        },
        {
            id: 15,
            title: "🥗 DIET PLANNING",
            content: `
                <h3>15.1 Definition</h3>
                <p>Diet planning is the structured approach to organizing your meals to hit specific macro and micronutrient targets that align with your fitness goals.</p>
                <h3>15.2 Components</h3>
                <p>A balanced intake of protein, carbohydrates, and fats, tailored to your activity level. It involves meal frequency, food quality selection, and portion control.</p>
                <h3>15.3 Importance</h3>
                <p>Proper planning eliminates guesswork, ensures consistent energy for training, and optimizes body composition changes.</p>
            `
        },
        {
            id: 16,
            title: "❤️ CARDIO TRAINING",
            content: `
                <h3>16.1 Definition</h3>
                <p> एक्सरसाizes that improve the efficiency of the heart and lung function. It is essential for overall health and supports fat loss.</p>
                <h3>16.2 Types</h3>
                <ul>
                    <li><strong>HIIT:</strong> High Intensity Interval Training (short bursts of max effort).</li>
                    <li><strong>Steady-state:</strong> Constant moderate intensity (like brisk walking or cycling).</li>
                </ul>
                <h3>16.3 Benefits</h3>
                <p>Improves cardiovascular endurance, enhances metabolic health, and aids in faster recovery between sets by improving oxygen delivery.</p>
            `
        },
        {
            id: 17,
            title: "🧠 FITNESS PSYCHOLOGY",
            content: `
                <h3>17.1 Importance</h3>
                <p>Mental strength is the engine of a fitness journey. Motivation gets you started, but discipline keeps you going on days when you don't feel like training.</p>
                <h3>17.2 Factors</h3>
                <p>Goal setting, habit formation, and positive self-talk. Building a "champions mindset" is about overcoming temporary obstacles for long-term rewards.</p>
                <h3>17.3 Application</h3>
                <p>Developing healthy habits turns fitness from a chore into a lifestyle identity.</p>
            `
        },
        {
            id: 18,
            title: "👨‍👩‍👧 SPECIAL POPULATIONS",
            content: `
                <h3>18.1 Groups</h3>
                <p>Different groups require adjusted approaches, including beginners, women, the elderly, and high-performance athletes.</p>
                <h3>18.2 Approach</h3>
                <p>Training must be customized. For example, focusing on bone density in the elderly, or specific training phases for women. FedFit ensures every program respects individual physiological limitations and strengths.</p>
            `
        },
        {
            id: 19,
            title: "🏋️‍♂️ PROGRAM DESIGN",
            content: `
                <h3>19.1 Definition</h3>
                <p>Planning your training sessions based on your specific goals, current fitness level, and recovery capacity.</p>
                <h3>19.2 Components</h3>
                <p>Proper exercise selection, managing volume (sets/reps), intensity (weight), and establishing a clear path for progression.</p>
                <h3>19.3 Importance</h3>
                <p>A structured program prevents overtraining, avoids plateaus, and ensures every minute in the gym moves you closer to your goal.</p>
            `
        },
        {
            id: 20,
            title: "🧘 FLEXIBILITY & MOBILITY",
            content: `
                <h3>20.1 Definition</h3>
                <p>Flexibility refers to the length of muscles, while mobility refers to the ability of joints to move through their full range of motion.</p>
                <h3>20.2 Benefits</h3>
                <p>Crucial for injury prevention, maintaining proper posture, and allowing you to perform exercises like squats and deadlifts with safe, effective form.</p>
            `
        },
        {
            id: 21,
            title: "🚑 EMERGENCY & FIRST AID",
            content: `
                <h3>21.1 Importance</h3>
                <p>Immediate and informed response during a medical emergency in a gym environment can be life-saving.</p>
                <h3>21.2 Core Skills</h3>
                <p>Includes basic knowledge of CPR, responding to choking, managing sudden fainting, and initial care for acute musculoskeletal injuries (RICE protocol).</p>
            `
        },
        {
            id: 22,
            title: "📊 TRACKING PROGRESS",
            content: `
                <h3>22.1 Methods</h3>
                <p>Don't just rely on the scale. Track body weight, limb measurements, progress photos, and most importantly, your performance in the gym (strength milestones).</p>
                <h3>22.2 Importance</h3>
                <p>Objective tracking allows for adjustments to your program and provides the motivation to keep going as you see your hard-earned progress documented.</p>
            `
        },
        {
            id: 23,
            title: "🌍 FITNESS LIFESTYLE",
            content: `
                <h3>23.1 Concept</h3>
                <p>Fitness is not a temporary destination; it is a permanent lifestyle. It represents a commitment to your long-term health and vitality.</p>
                <h3>23.2 Components</h3>
                <p>It integrates consistent exercise, mindful nutrition, quality sleep, and proactive mental health care into your daily routine.</p>
            `
        },
        {
            id: 24,
            title: "🎯 FITNESS COACHING",
            content: `
                <h3>24.1 Role</h3>
                <p>A professional coach guides you safely and effectively toward your goals, providing the technical expertise and accountability needed for a true transformation.</p>
                <h3>24.2 Ethics</h3>
                <p>At FedFit, we prioritize client safety, scientific integrity, and professionalism above all else. We don't just build bodies; we build identity and discipline.</p>
                <div class="chapter-summary">
                    <p><strong>✅ Final Summary:</strong> The FedFit curriculum provides the complete scientific foundation needed to master your fitness journey. From cellular metabolism to professional coaching ethics, you now have the database required to shape your confidence and identity.</p>
                </div>
            `
        }
    ];

    // Chapters are finalized. No loop needed.

    return (
        <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white font-['Outfit',sans-serif] overflow-x-hidden">
            {/* ── Background Elements ── */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-red-600/10 to-transparent" />
            </div>

            {/* ── Header ── */}
            <header className="relative z-[50] flex items-center justify-between px-8 py-6 border-b border-white/[0.06] backdrop-blur-md sticky top-0 bg-black/40">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors uppercase text-[0.7rem] font-black tracking-widest"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </button>
                <div className="flex items-center gap-4">
                    <img src="/images/logo/logo.jpeg" alt="FedFit Logo" className="w-8 h-8 rounded-full border border-red-600/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]" />
                    <div className="text-2xl font-black italic tracking-tighter uppercase flex items-center">
                        <span className="text-white/50">FED</span>
                        <span className="text-red-600">FIT</span>
                        <span className="ml-3 text-[0.6rem] text-white/30 tracking-[0.3em] font-bold">— ACADEMY</span>
                    </div>
                </div>
                <div className="w-24 hidden md:block" />
            </header>

            <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row gap-12">
                {/* ── Chapter Navigation ── */}
                <div className="w-full lg:w-1/3">
                    <div className="sticky top-32 space-y-4">
                        <h2 className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-8">Curriculum</h2>
                        <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-4 custom-scrollbar">
                            {academyContent.map((chapter) => (
                                <button
                                    key={chapter.id}
                                    onClick={() => {
                                        setSelectedChapter(chapter);
                                        if (window.innerWidth < 1024) {
                                            setTimeout(() => {
                                                contentRef.current?.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }
                                    }}
                                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${
                                        selectedChapter?.id === chapter.id 
                                        ? 'bg-red-600 border-red-600 shadow-[0_0_25px_rgba(239,68,68,0.3)]' 
                                        : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                                    }`}
                                >
                                    <span className={`text-[0.6rem] font-bold uppercase tracking-widest block mb-1 ${selectedChapter?.id === chapter.id ? 'text-white' : 'text-white/30'}`}>
                                        Chapter {chapter.id.toString().padStart(2, '0')}
                                    </span>
                                    <span className={`text-sm font-black uppercase tracking-tight leading-tight block ${selectedChapter?.id === chapter.id ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                                        {chapter.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Module Content ── */}
                <div className="w-full lg:w-2/3">
                    <AnimatePresence mode="wait">
                        {selectedChapter ? (
                                <motion.div
                                    ref={contentRef}
                                    key={selectedChapter.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/[0.02] border border-white/5 p-10 sm:p-14 rounded-[3rem] min-h-[600px] academy-viewer"
                            >
                                <div className="mb-14 pb-8 border-b border-white/5">
                                    <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[0.7rem]">Elite Academic Module</span>
                                    <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mt-3">{selectedChapter.title}</h1>
                                </div>
                                <div 
                                    className="academy-html-content text-white/60 font-light leading-relaxed tracking-wide"
                                    dangerouslySetInnerHTML={{ __html: selectedChapter.content }}
                                />
                            </motion.div>
                        ) : (
                            <div className="h-[600px] flex flex-col items-center justify-center text-center p-12 border border-dashed border-white/10 rounded-[3rem] bg-white/[0.01]">
                                <div className="text-red-600 mb-6">
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-4 italic">
                                    <span className="text-white/20 font-light">FEDFIT</span> ACADEMIC <span className="text-red-600">PORTAL</span>
                                </h2>
                                <p className="text-white/30 max-w-xs mx-auto text-sm tracking-wide">Select a chapter from the curriculum to access the FedFit scientific performance database.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
                .academy-html-content h3 {
                    color: white;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-top: 3rem;
                    margin-bottom: 1.2rem;
                    font-size: 1.2rem;
                }
                .academy-html-content p {
                    margin-bottom: 1.8rem;
                }
                .academy-html-content strong {
                    color: white;
                    font-weight: 700;
                }
                .academy-html-content ul {
                    list-style: none;
                    margin-bottom: 2rem;
                    padding-left: 0;
                }
                .academy-html-content li {
                    position: relative;
                    padding-left: 1.8rem;
                    margin-bottom: 0.8rem;
                    font-size: 0.95rem;
                }
                .academy-html-content li::before {
                    content: '→';
                    position: absolute;
                    left: 0;
                    color: #ef4444;
                    font-weight: 900;
                }
                .chapter-summary {
                    margin-top: 4rem;
                    padding: 2rem;
                    background: rgba(239, 68, 68, 0.05);
                    border-radius: 1.5rem;
                    border: 1px solid rgba(239, 68, 68, 0.2);
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(239, 68, 68, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(239, 68, 68, 0.5);
                }
            `}</style>
            
            <footer className="py-20 border-t border-white/[0.05] flex flex-col items-center relative z-20 bg-black">
                <div className="text-xl font-black italic tracking-tighter uppercase mb-4 opacity-20">
                    <span className="text-white">FED</span>
                    <span className="text-white">FIT</span>
                </div>
                <div className="text-white/10 text-[0.5rem] tracking-[0.3em] uppercase">
                    &copy; 2026 FedFit. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Academy;
