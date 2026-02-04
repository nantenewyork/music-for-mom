export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  category: string;
  categoryEn: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'mozart-effect-pregnancy',
    title: '모차르트 효과와 태교: AI가 분석한 과학적 진실과 추천 활용법',
    titleEn: 'The Mozart Effect & Prenatal Care: Scientific Truths ai Analyzed',
    date: '2026-01-27',
    category: '태교 과학',
    categoryEn: 'Prenatal Science',
    excerpt: '모차르트의 음악이 태아의 두뇌 발달에 정말 도움이 될까요? 최신 연구 결과와 효과적인 감상법을 제안합니다.',
    excerptEn: 'Does Mozart’s music really help fetal brain development? We present effective listening methods based on the latest research.',
    content: `
      <section>
        <h2>요약: 모차르트 효과는 실제인가요?</h2>
        <p><strong>결론부터 말씀드리면, 모차르트 음악이 지능을 직접 높인다는 '마법'은 입증되지 않았지만, '심리적 안정'을 통한 태아의 정서 발달 효과는 매우 강력합니다.</strong> 밝고 규칙적인 60-70BPM의 선율이 임산부의 스트레스 호르몬을 낮추는 것이 핵심입니다.</p>
      </section>

      <section>
        <h2>1. 모차르트 효과(Mozart Effect)의 기원</h2>
        <p>1993년 프랜시스 라우셔 박사의 연구로 시작된 이 용어는 모차르트의 '두 대의 피아노를 위한 소나타 K.448'을 들은 대학생들의 공간 추론 능력이 일시적으로 상승했다는 결과를 바탕으로 합니다.</p>
      </section>
      
      <section>
        <h2>2. 왜 하필 모차르트인가요?</h2>
        <ul>
          <li><strong>뇌파 안정:</strong> 모차르트 곡은 고도의 수학적 구조와 반복성을 지녀 뇌파를 가장 안정적인 8~13Hz(알파파) 상태로 유도하기 쉽습니다.</li>
          <li><strong>고주파의 자극:</strong> 태아의 청각 발달에 적합한 고음역대 선율이 풍부합니다.</li>
        </ul>
      </section>
      
      <section>
        <h2>3. 추천 활용 가이드 (FAQ)</h2>
        <h3>Q: 언제 듣는 것이 가장 좋은가요?</h3>
        <p>A: 태아의 청각이 완성되는 <strong>임신 24주 이후</strong>, 하루 20분 내외로 엄마가 가장 편안함을 느끼는 시간에 감상하는 것이 최적입니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>Summary: Is the Mozart Effect Real?</h2>
        <p><strong>To begin with, while the idea that Mozart's music magically increases intelligence hasn't been proven, its effect on fetal emotional development through 'psychological stability' is powerful.</strong> The key is that the bright, regular 60-70 BPM melodies lower the mother's stress hormones.</p>
      </section>

      <section>
        <h2>1. The Origin of the Mozart Effect</h2>
        <p>Coined after Dr. Frances Rauscher's 1993 study, this term is based on findings that college students showed a temporary increase in spatial-temporal reasoning after listening to Mozart's 'Sonata for Two Pianos K.448'.</p>
      </section>
      
      <section>
        <h2>2. Why Mozart?</h2>
        <ul>
          <li><strong>Brainwave Stability:</strong> Mozart's pieces have a high degree of mathematical structure and repetition, making it easy to induce the brain into a stable 8-13Hz (Alpha wave) state.</li>
          <li><strong>High-Frequency Stimulation:</strong> They are rich in high-frequency melodies suitable for fetal auditory development.</li>
        </ul>
      </section>
      
      <section>
        <h2>3. Recommended Usage Guide (FAQ)</h2>
        <h3>Q: When is the best time to listen?</h3>
        <p>A: It is optimal to listen for about 20 minutes a day <strong>after 24 weeks of pregnancy</strong>, when the fetus's hearing is fully developed, at a time when the mother feels most relaxed.</p>
      </section>
    `
  },
  {
    id: 'top-5-composers-for-moms',
    title: '임산부를 위한 태교 클래식 작곡가 TOP 5 및 대표곡 가이드',
    titleEn: 'Top 5 Classical Composers for Expecting Moms & Essential Tracks',
    date: '2026-01-27',
    category: '추천 리스트',
    categoryEn: 'Curated List',
    excerpt: 'AI가 선정한 임신 시기별 추천 클래식 작곡가 리스트와 그 효과를 공개합니다.',
    excerptEn: 'We reveal the list of recommended classical composers for each stage of pregnancy selected by AI and their effects.',
    content: `
      <section>
        <h2>한눈에 보는 태교 작곡가 추천 리스트</h2>
        <p><strong>1. 모차르트:</strong> 두뇌 발달과 밝은 에너지 제공. (추천곡: 피아노 협주곡 21번)</p>
        <p><strong>2. 바흐:</strong> 심신 안정과 심박동 조절. (추천곡: G선상의 아리아)</p>
        <p><strong>3. 파헬벨:</strong> 평화로운 환경 조성. (추천곡: 캐논 D장조)</p>
        <p><strong>4. 드뷔시:</strong> 상상력과 감성 풍부. (추천곡: 달빛)</p>
        <p><strong>5. 쇼팽:</strong> 피로 회복과 우아한 휴식. (추천곡: 녹턴 2번)</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>Recommended Composers for Prenatal Care at a Glance</h2>
        <p><strong>1. Mozart:</strong> Brain development and bright energy. (Recommended: Piano Concerto No. 21)</p>
        <p><strong>2. Bach:</strong> Mind-body stability and heart rate regulation. (Recommended: Air on the G String)</p>
        <p><strong>3. Pachelbel:</strong> Creating a peaceful environment. (Recommended: Canon in D)</p>
        <p><strong>4. Debussy:</strong> Imagination and rich emotion. (Recommended: Clair de Lune)</p>
        <p><strong>5. Chopin:</strong> Fatigue recovery and elegant rest. (Recommended: Nocturne No. 2)</p>
      </section>
    `
  },
  {
    id: 'early-pregnancy-anxiety-relief',
    title: '임신 초기 불안감 해소를 위한 클래식 처방전',
    titleEn: 'Classical Prescription for Early Pregnancy Anxiety Relief',
    date: '2026-01-27',
    category: '심리 케어',
    categoryEn: 'Mental Care',
    excerpt: '호르몬 변화로 예민한 임신 초기, 마음을 진정시키는 첼로 선율을 추천합니다.',
    excerptEn: 'We recommend cello melodies to soothe the mind during early pregnancy, when hormone changes can make you sensitive.',
    content: `
      <section>
        <h2>임신 초기, 왜 클래식이 필요한가요?</h2>
        <p><strong>핵심 이유:</strong> 임신 초기는 입덧과 불면증 등으로 심리적 불안이 최고조에 달하는 시기입니다. 클래식 음악의 저주파 진동은 신체 근육을 이완시키는 효과가 있습니다.</p>
      </section>
      <section>
        <h2>전문가 추천: 생상스 '백조'</h2>
        <p>첼로의 깊은 음색은 엄마의 자궁 속 소리와 유사한 주파수를 지닙니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>Why Classical Music in Early Pregnancy?</h2>
        <p><strong>Key Reason:</strong> Early pregnancy is a time when psychological anxiety peaks due to morning sickness and insomnia. The low-frequency vibrations of classical music have a muscle-relaxing effect.</p>
      </section>
      <section>
        <h2>Expert Pick: Saint-Saëns 'The Swan'</h2>
        <p>The deep tone of the cello has a frequency similar to the sounds inside the mother's womb.</p>
      </section>
    `
  },
  {
    id: 'classic-music-brain-development-science',
    title: '과학으로 증명된 클래식 음악의 태아 두뇌 발달 효능',
    titleEn: 'Scientifically Proven Benefits of Classical Music for Fetal Brain Development',
    date: '2026-01-27',
    category: '태교 과학',
    categoryEn: 'Prenatal Science',
    excerpt: '음악적 자극이 태아의 뉴런 연결에 미치는 구체적인 메커니즘을 설명합니다.',
    excerptEn: 'Explaining the specific mechanisms by which musical stimulation affects fetal neuronal connections.',
    content: `
      <section>
        <h2>태아의 청각 발달 타임라인</h2>
        <p>임신 16주에 귀의 구조가 형성되고, 24주에는 외부 소리에 반응하기 시작합니다. 이때 전달되는 클래식의 복합적인 화음은 태아의 뇌궁(Arch of the brain) 발달을 돕습니다.</p>
      </section>
      <section>
        <h2>공간-시간 추론 능력의 향상</h2>
        <p>클래식 음악의 논리적인 구조는 태아의 뇌가 패턴을 인식하는 훈련을 하게 하며, 이는 향후 수학 및 논리적 사고력의 기초가 됩니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>Fetal Auditory Development Timeline</h2>
        <p>The ear structure forms at 16 weeks, and by 24 weeks, the fetus begins to react to external sounds. The complex harmonies of classical music transmitted at this time help develop the fetal brain arch.</p>
      </section>
      <section>
        <h2>Improvement in Spatial-Temporal Reasoning</h2>
        <p>The logical structure of classical music trains the fetal brain to recognize patterns, laying the foundation for future mathematical and logical thinking skills.</p>
      </section>
    `
  },
  {
    id: 'mid-pregnancy-cello-connection',
    title: '임신 중기, 태아와 교감하는 경쾌한 첼로/바이올린 곡',
    titleEn: 'Mid-Pregnancy: Cheerful Cello/Violin Pieces for Bonding',
    date: '2026-01-27',
    category: '시기별 추천',
    categoryEn: 'Trimester Tips',
    excerpt: '태동이 활발해지는 5~7개월차, 아기와 함께 리듬을 타기 좋은 곡 리스트입니다.',
    excerptEn: 'A list of songs good for riding the rhythm with your baby during months 5-7 when fetal movement becomes active.',
    content: `
      <section>
        <h2>태동과 음악의 동기화</h2>
        <p>태동이 느껴질 때 경쾌한 곡을 들려주면 태아의 움직임이 활발해지는 것을 경험할 수 있습니다. 이는 아주 초기 단계의 '놀이'이자 '학습'입니다.</p>
      </section>
      <section>
        <h2>추천곡: 엘가 '사랑의 인사'</h2>
        <p>따뜻하고 친근한 멜로디가 아기를 기다리는 설렘을 더해줍니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>Synchronizing Movement and Music</h2>
        <p>Playing cheerful music when you feel fetal movement can encourage the baby to move more actively. This is a very early stage of 'play' and 'learning'.</p>
      </section>
      <section>
        <h2>Recommended: Elgar 'Salut d\\'Amour'</h2>
        <p>The warm and friendly melody adds to the excitement of waiting for the baby.</p>
      </section>
    `
  },
  {
    id: 'how-to-listen-effectively-at-home',
    title: '집에서 실천하는 효과적인 태교 음악 감상법 3원칙',
    titleEn: '3 Principles of Effective Prenatal Music Listening at Home',
    date: '2026-01-27',
    category: '태교 가이드',
    categoryEn: 'Prenatal Guide',
    excerpt: '단순히 듣는 것보다 100배 효과적인 "공감형 감상법"을 소개합니다.',
    excerptEn: 'Introducing an "empathetic listening method" that is 100 times more effective than just passive listening.',
    content: `
      <section>
        <h2>1. 복식 호흡과 병행하라</h2>
        <p>천천히 숨을 들이마시고 내뱉으며 음악을 들으면, 엄마의 산소 공급량이 늘어나 태아에게 더 많은 영양과 안정을 전달합니다.</p>
      </section>
      <section>
        <h2>2. 태담(Talk to baby)을 섞어라</h2>
        <p>"아기야, 이 바이올린 소리가 참 아름답지?"라고 말하며 듣는 것은 최고의 정서 교육입니다.</p>
      </section>
      <section>
        <h2>3. 일관성 있는 시간대</h2>
        <p>가능하면 매일 같은 시간에 들음으로써 태아에게 일정한 생체 리듬을 만들어주세요.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Combine with Abdominal Breathing</h2>
        <p>Breathing in and out slowly while listening increases the mother's oxygen supply, delivering more nutrition and stability to the fetus.</p>
      </section>
      <section>
        <h2>2. Mix with Talk-to-Baby</h2>
        <p>Saying "Baby, isn't this violin sound beautiful?" while listening is the best emotional education.</p>
      </section>
      <section>
        <h2>3. Consistent Timing</h2>
        <p>Create a consistent biorhythm for the fetus by listening at the same time every day if possible.</p>
      </section>
    `
  },
  {
    id: 'classical-music-for-better-maternity-sleep',
    title: '임산부 불면증 극복을 위한 고요한 클래식 자장가',
    titleEn: 'Serene Classical Lullabies to Overcome Maternity Insomnia',
    date: '2026-01-27',
    category: '건강 케어',
    categoryEn: 'Health Care',
    excerpt: '잠들기 힘든 임신 후기, 숙면을 유도하는 낮은 데시벨의 수면 유도 음악 추천.',
    excerptEn: 'Low-decibel sleep-inducing music recommendations for deep sleep during late pregnancy when it’s hard to fall asleep.',
    content: `
      <section>
        <h2>임신 후기 불면증의 원인과 대책</h2>
        <p>배의 무게감과 호르몬 변화로 깊은 잠에 들기 어렵습니다. 이때 델타파를 유도하는 잔잔한 클래식은 천연 수면제 역할을 합니다.</p>
      </section>
      <section>
        <h2>추천곡: 브람스 '자장가'</h2>
        <p>전 세계에서 가장 검증된 수면 유도곡으로, 임산부의 긴장을 완화시켜줍니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>Causes and Remedies for Late Pregnancy Insomnia</h2>
        <p>It is difficult to sleep deeply due to the weight of the belly and hormonal changes. At this time, calm classical music leading to delta waves acts as a natural sleeping pill.</p>
      </section>
      <section>
        <h2>Recommended: Brahms 'Lullaby'</h2>
        <p>The most proven sleep-inducing song in the world, relaxes the pregnant woman's tension.</p>
      </section>
    `
  },
  {
    id: 'bach-well-tempered-inner-peace',
    title: '바흐의 평균율: 복잡한 머릿속을 정리해주는 질서의 미학',
    titleEn: 'Bach\'s Well-Tempered Clavier: The Aesthetics of Order',
    date: '2026-01-27',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '감정 기복이 심한 임산부에게 정서적 이정표가 되어주는 바흐의 음악 세계.',
    excerptEn: 'Bach\'s musical world becomes an emotional milestone for pregnant women with severe mood swings.',
    content: `
      <section>
        <h2>질서 있는 선율이 주는 안정감</h2>
        <p>바흐의 음악은 수학적으로 완벽한 대위법을 따릅니다. 무질서한 감정 상태에서 바흐를 들으면 뇌가 자연스럽게 체계를 찾게 됩니다.</p>
      </section>
      <section>
        <h2>추천곡: 평균율 클라비어곡집 1권 1번 프렐류드</h2>
        <p>반복되는 아르페지오가 마음을 정화시켜줍니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>Stability from Ordered Melodies</h2>
        <p>Bach's music follows mathematically perfect counterpoint. Listening to Bach in a chaotic emotional state helps the brain naturally find a system.</p>
      </section>
      <section>
        <h2>Recommended: The Well-Tempered Clavier, Book 1, Prelude No. 1</h2>
        <p>The repeating arpeggios purify the mind.</p>
      </section>
    `
  },
  {
    id: 'nature-healing-classical-harmony',
    title: '숲길을 걷는 듯한 힐링 태교: 자연주의 클래식 추천',
    titleEn: 'Healing Like Walking in a Forest: Nature-Inspired Classical',
    date: '2026-01-27',
    category: '추천 리스트',
    categoryEn: 'Curated List',
    excerpt: '야외 활동이 제한될 때 집 안을 숲속으로 만들어주는 자연 친화적 클래식들.',
    excerptEn: 'Nature-friendly classics that turn your home into a forest when outdoor activities are restricted.',
    content: `
      <section>
        <h2>시각화 태교의 중요성</h2>
        <p>음악을 들으며 푸른 숲을 상상하면 실제 숲에 있는 것과 유사한 세로토닌이 분비됩니다.</p>
      </section>
      <section>
        <h2>추천곡: 베토벤 교향곡 6번 '전원'</h2>
        <p>자연의 싱그러움이 느껴지는 1악장을 추천합니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>The Importance of Visualization</h2>
        <p>Imagining a green forest while listening to music releases serotonin similar to actually being in a forest.</p>
      </section>
      <section>
        <h2>Recommended: Beethoven Symphony No. 6 'Pastoral'</h2>
        <p>We recommend the first movement, where you can feel the freshness of nature.</p>
      </section>
    `
  },
  {
    id: 'ai-curation-for-modern-moms',
    title: '왜 현대 임산부에게 AI 커스텀 음악 추천이 필요할까요?',
    titleEn: 'Why Modern Moms Need AI Custom Music Recommendations',
    date: '2026-01-27',
    category: '서비스 소개',
    categoryEn: 'Service Intro',
    excerpt: '천편일률적인 태교 음악에서 벗어나, 내 기분에 맞춘 실시간 큐레이션의 가치.',
    excerptEn: 'Breaking away from cookie-cutter prenatal music, the value of real-time curation tailored to your mood.',
    content: `
      <section>
        <h2>나만의 감정이 존중받는 태교</h2>
        <p>유명한 태교 곡이라도 지금 내 기분(우울, 기쁨, 피곤)과 맞지 않으면 소음이 될 수 있습니다. AI는 실시간으로 사용자의 상태를 분석해 최적의 곡을 제안합니다.</p>
      </section>
      <section>
        <h2>정서적 공감을 통한 진정한 힐링</h2>
        <p>Music for Mom은 단순한 재생목록이 아니라, 엄마의 오늘을 위로하고 내일의 육아를 준비하는 든든한 동반자입니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>Prenatal Care that Respects Your Emotions</h2>
        <p>Even famous prenatal songs can be noise if they don't match your current mood (depressed, happy, tired). AI suggests the optimal song by analyzing the user's state in real-time.</p>
      </section>
      <section>
        <h2>True Healing Through Emotional Empathy</h2>
        <p>Music for Mom is not just a playlist, but a reliable companion that comforts mom's today and prepares for tomorrow's parenting.</p>
      </section>
    `
  },
  {
    id: 'bach-air-on-the-g-string-story',
    title: '[태교 클래식] 바흐 ‘G선상의 아리아’: 지친 엄마의 마음을 어루만지는 고요한 선율의 힘',
    titleEn: '[Classical Focus] Bach \'Air on the G String\': The Power of Serene Melody',
    date: '2026-01-29',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '바흐의 가장 사랑받는 작품, \'G선상의 아리아\'에 담긴 평온의 철학과 태교에 미치는 놀라운 효과를 소개합니다.',
    excerptEn: 'Introducing the philosophy of peace in Bach\'s most beloved work, \'Air on the G String\', and its amazing effects on prenatal care.',
    content: `
      <section>
        <h2>1. ‘음악의 아버지’ 바흐와 그의 위대한 유산</h2>
        <p>서양 음악의 기틀을 마련한 요한 제바스티안 바흐(Johann Sebastian Bach)는 바로크 시대를 상징하는 작곡가입니다. 그의 음악은 마치 정교하게 지어진 건축물처럼 논리적이고 질서 정연한 구조를 지니고 있어, 듣는 이의 뇌파를 가장 안정적인 상태로 유도하는 것으로 알려져 있습니다.</p>
      </section>

      <section>
        <h2>2. ‘G선상의 아리아’에 얽힌 흥미로운 이야기</h2>
        <p>우리가 흔히 부르는 ‘G선상의 아리아’의 원곡은 바흐가 작곡한 ‘관현악 모음곡 3번 D장조’의 두 번째 악장입니다. 원래는 여러 악기가 함께 연주하는 곡이었으나, 약 100년 후 독일의 바이올리니스트 아우구스트 빌헬미(August Wilhelmj)가 바이올린의 네 줄 중 가장 낮고 깊은 소리를 내는 ‘G선’ 하나로만 연주할 수 있도록 편곡하면서 이 아름다운 이름이 붙여졌습니다. 오직 한 줄의 현에서 뿜어져 나오는 깊고 묵직한 울림은 그 어떤 화려한 기교보다도 큰 감동을 선사합니다.</p>
      </section>

      <section>
        <h2>3. 시대적 배경: 바로크 음악의 질서와 조화</h2>
        <p>18세기 바로크 시대는 조화와 균형을 중시하던 시기였습니다. 이 곡의 베이스 라인은 일정한 보폭으로 걷는 듯한 ‘워킹 베이스(Walking Bass)’ 기법을 사용하여, 산모의 심박수와 호흡을 차분하게 가라앉히는 데 탁월한 효과가 있습니다. 기하학적인 선율의 흐름은 산개된 감정을 하나로 모아주는 정서적 이정표 역할을 합니다.</p>
      </section>

      <section>
        <h2>4. 태교를 위한 감상 포인트</h2>
        <p><strong>정서적 안정과 혈류 공급:</strong> 이 곡의 부드럽고 긴 호흡의 선율은 산모의 근육을 이완시키고 혈액 순환을 도와 태아에게 더 풍부한 산소를 공급합니다. 특히 감정 기복이 심한 임신 중기나 불안감이 큰 초기에 명상과 함께 들으면 태아와 깊은 정서적 유대감을 형성할 수 있습니다.</p>
        <p><strong>감상 팁:</strong> 소리에 집중하기보다는 그 선율이 그리는 풍경을 상상해 보세요. 아기와 함께 조용한 숲길을 걷는 상상을 하며 들을 때 태교의 효과는 극대화됩니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Bach, the 'Father of Music' and His Legacy</h2>
        <p>Johann Sebastian Bach, who laid the foundation for Western music, is a composer symbolizing the Baroque era. His music has a logical and orderly structure like a finely built architecture, known to induce the listener's brainwaves into the most stable state.</p>
      </section>

      <section>
        <h2>2. Interesting Story Behind 'Air on the G String'</h2>
        <p>The original song we commonly call 'Air on the G String' is the second movement of Bach's 'Orchestral Suite No. 3 in D Major'. Originally played by multiple instruments, it was named this way after German violinist August Wilhelmj arranged it to be played only on the 'G string', the lowest and deepest sounding string of the four violin strings, about 100 years later. The deep, heavy resonance from a single string delivers a greater touch than any flashy technique.</p>
      </section>

      <section>
        <h2>3. Context: Order and Harmony of Baroque Music</h2>
        <p>The 18th-century Baroque era valued harmony and balance. The bass line of this song uses the 'Walking Bass' technique, which simulates walking at a steady pace, having an excellent effect on calming the mother's heart rate and breathing.</p>
      </section>

      <section>
        <h2>4. Listening Points for Prenatal Care</h2>
        <p><strong>Emotional Stability and Blood Flow:</strong> The soft, long-breathing melody relaxes maternal muscles and helps blood circulation, supplying richer oxygen to the fetus.</p>
        <p><strong>Listening Tip:</strong> Instead of focusing on the sound, imagine the scenery the melody draws. The effect is maximized when you listen imagining walking on a quiet forest path with your baby.</p>
      </section>
    `
  },
  {
    id: 'debussy-clair-de-lune-story',
    title: '[태교 클래식] 드뷔시 ‘달빛’: 엄마와 아기를 위한 몽환적인 꿈의 선율',
    titleEn: '[Classical Focus] Debussy \'Clair de Lune\': Dreamy Melody for Mom & Baby',
    date: '2026-01-30',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '인상주의 음악의 걸작, 드뷔시의 \'달빛\'이 선사하는 평온한 휴식과 태교 효과에 대해 알아봅니다.',
    excerptEn: 'We explore the peaceful rest and prenatal effects offered by Debussy\'s \'Clair de Lune\', a masterpiece of Impressionist music.',
    content: `
      <section>
        <h2>1. 인상주의 음악의 창시자, 클로드 드뷔시</h2>
        <p>프랑스 작곡가 클로드 드뷔시(Claude Debussy)는 음악계의 인상파 화가와도 같습니다. 그는 사물을 뚜렷하게 묘사하기보다는, 빛과 그림자가 만들어내는 순간적인 인상과 분위기를 소리로 표현하는 데 집중했습니다. 그의 음악은 몽환적이고 신비로운 색채를 띠며, 듣는 이로 하여금 깊은 상상력의 세계로 빠져들게 합니다.</p>
      </section>

      <section>
        <h2>2. 달빛(Clair de Lune)의 탄생 배경</h2>
        <p>드뷔시의 가장 유명한 피아노 곡 중 하나인 '달빛'은 그의 초기 걸작인 '베르가마스크 모음곡(Suite bergamasque)'의 세 번째 곡입니다. 이 곡은 프랑스 시인 폴 베를렌(Paul Verlaine)의 동명의 시에서 영감을 받아 작곡되었습니다. 시 속에 묘사된 가면을 쓴 광대들의 슬프고도 아름다운 춤, 그리고 그 위로 쏟아지는 창백한 달빛의 이미지를 피아노 선율로 완벽하게 재현해냈습니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>수면 유도와 심신 안정:</strong> '달빛'은 9/8박자의 부드럽게 흔들리는 리듬을 가지고 있어, 마치 자장가처럼 편안함을 줍니다. 피아노의 섬세한 타건음은 태아의 뇌세포를 부드럽게 자극하며, 불면증으로 고생하는 임산부에게는 깊은 숙면을 유도하는 효과가 탁월합니다.</p>
        <p><strong>상상력 자극:</strong> 눈을 감고 은은한 달빛이 비추는 고요한 호수를 상상해 보세요. 물결 위에 반짝이는 빛 조각들이 아기에게 전하는 축복의 메시지라고 생각하며 감상하면 긍정적인 호르몬 분비가 촉진됩니다.</p>
      </section>

      <section>
        <h2>4. 언제 들으면 좋을까요?</h2>
        <p>하루를 마무리하는 저녁 시간, 조명을 낮추고 편안한 자세로 휴식을 취할 때 가장 추천합니다. 따뜻한 차 한 잔과 함께 이 곡을 들으며 아기에게 오늘 하루 있었던 즐거운 일들을 속삭여주세요.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Claude Debussy, Founder of Impressionist Music</h2>
        <p>French composer Claude Debussy is like an Impressionist painter in the music world. He focused on expressing instantaneous impressions and atmospheres created by light and shadow through sound rather than clearly depicting objects.</p>
      </section>

      <section>
        <h2>2. Background of 'Clair de Lune'</h2>
        <p>One of Debussy's most famous piano pieces, 'Clair de Lune', is the third piece of his early masterpiece 'Suite bergamasque'. It was inspired by the poem of the same name by French poet Paul Verlaine.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Sleep Induction and Stability:</strong> 'Clair de Lune' has a gently swaying 9/8 rhythm, giving comfort like a lullaby.</p>
        <p><strong>Stimulating Imagination:</strong> Close your eyes and imagine a quiet lake lit by soft moonlight. Imagining the sparkling light fragments on the waves as messages of blessing to your baby promotes positive hormone secretion.</p>
      </section>

      <section>
        <h2>4. When is the Best Time to Listen?</h2>
        <p>We highly recommend it in the evening when finishing the day, dimming the lights and relaxing in a comfortable position.</p>
      </section>
    `
  },
  {
    id: 'brahms-intermezzo-op118-no2-story',
    title: "[태교 클래식] 브람스 '인터메조 A장조, Op. 118 No. 2': 깊은 사랑과 위로의 선율",
    titleEn: "[Classical Focus] Brahms 'Intermezzo in A Major, Op. 118 No. 2': Melody of Love and Comfort",
    date: '2026-02-05',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: "브람스가 평생을 간직한 사랑, 클라라 슈만에게 바친 마지막 피아노 소품집. 가슴 시리도록 아름다운 선율이 전하는 따뜻한 위로.",
    excerptEn: "Brahms' last piano pieces dedicated to his lifelong love, Clara Schumann. Warm comfort conveyed by heartbreakingly beautiful melodies.",
    content: `
      <section>
        <h2>1. 고독한 낭만주의자, 요하네스 브람스</h2>
        <p>요하네스 브람스(Johannes Brahms)는 낭만주의 시대에 살았지만, 고전주의의 형식을 중시했던 작곡가입니다. 화려하고 기교적인 당대 음악 트렌드와 달리, 그는 내면의 깊은 감정을 절제된 형식 안에 담아내는 것을 추구했습니다. 그의 음악은 가을의 정취를 닮아, 쓸쓸하면서도 그 안에서 피어나는 따뜻한 위로를 전해줍니다.</p>
      </section>

      <section>
        <h2>2. 인터메조 Op. 118 No. 2: 클라라를 향한 마지막 연서</h2>
        <p>브람스의 말년(1893년)에 작곡된 '6개의 피아노 소품(Op. 118)' 중 두 번째 곡인 이 인터메조는, 그가 평생을 연모했던 스승의 아내, 클라라 슈만에게 헌정되었습니다. 당시 일흔이 넘은 클라라에게 보낸 이 곡에는 열정적인 사랑보다는, 긴 세월을 묵묵히 지켜온 헌신과 우정, 그리고 삶의 회한이 녹아있습니다. "내 인생의 가장 아름다운 선율"이라고 클라라가 극찬했을 만큼, 서정적이고 감미로운 멜로디가 인상적입니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>엄마의 마음을 어루만지는 위로:</strong> 임신 기간 중 엄마는 신체적 변화뿐 아니라 정서적으로도 많은 기복을 겪게 됩니다. 이 곡의 따뜻하고 포용력 있는 A장조 선율은 불안하고 지친 엄마의 마음을 부드럽게 감싸 안아줍니다. 슬픈 듯하지만 결코 비관적이지 않은 브람스 특유의 감성은, 엄마에게 "괜찮다"는 무언의 위로를 건넵니다.</p>
        <p><strong>아기에게 전하는 깊은 울림:</strong> 피아노의 중간 음역대에서 흘러나오는 노래하는 듯한 선율은 태아에게도 안정감을 줍니다. 너무 높거나 날카롭지 않아서, 아기가 뱃속에서 편안하게 휴식을 취하며 듣기에 최적의 곡입니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>비가 오는 오후나 해 질 녘 창가에 앉아 차 한 잔과 함께 감상해 보세요. 눈을 감고 음악이 전하는 이야기에 귀 기울이다 보면, 어느새 마음속 깊은 곳까지 평온함이 차오르는 것을 느낄 수 있을 것입니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. The Lonely Romantic, Johannes Brahms</h2>
        <p>Johannes Brahms lived in the Romantic era but valued Classical forms. Unlike the flashy trends of the time, he sought to contain deep inner emotions within restrained forms. His music resembles the mood of autumn.</p>
      </section>

      <section>
        <h2>2. Intermezzo Op. 118 No. 2: The Last Love Letter to Clara</h2>
        <p>Composed in Brahms' later years (1893), this piece was dedicated to Clara Schumann, the wife of his mentor whom he loved all his life. It contains dedication, friendship, and the remorse of life kept for a long time.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Comfort for Mom's Heart:</strong> During pregnancy, moms experience many emotional ups and downs. This song's warm A major melody gently wraps around the anxious and tired mom's heart.</p>
        <p><strong>Deep Resonance for Baby:</strong> The singing melody flowing from the middle register of the piano gives stability to the fetus.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Try listening with a cup of tea on a rainy afternoon or at sunset. You will feel peace filling up deep inside your heart.</p>
      </section>
    `
  }
];
