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
  },
  {
    id: 'satie-gymnopedie-no1-story',
    title: "[태교 클래식] 에릭 사티 '짐노페디 1번': 고요함 속에서 만나는 마음의 쉼표",
    titleEn: "[Classical Focus] Erik Satie 'Gymnopédie No. 1': A Relief for the Heart in Silence",
    date: '2026-02-07',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: "\"가구 음악\"의 시초, 에릭 사티가 전하는 몽환적이고 신비로운 위로. 복잡한 마음을 비워내는 미니멀리즘의 미학.",
    excerptEn: "The pioneer of \"Furniture Music,\" Erik Satie conveys dreamy and mysterious comfort. The aesthetics of minimalism to empty a complex mind.",
    content: `
      <section>
        <h2>1. 괴짜와 혁명가 사이, 에릭 사티</h2>
        <p>에릭 사티(Erik Satie)는 당대 주류였던 낭만주의 음악의 과도한 감정 표현과 웅장함을 거부했던 독창적인 작곡가입니다. 그는 음악이 감상자를 압도하거나 주의를 끌지 않고, 마치 가구처럼 그 공간에 자연스럽게 녹아들어야 한다고 생각했습니다. 이러한 그의 철학은 훗날 '미니멀리즘'과 '앰비언트 뮤직'의 탄생에 지대한 영향을 끼쳤습니다.</p>
      </section>

      <section>
        <h2>2. 짐노페디(Gymnopédie): 고대 그리스의 춤</h2>
        <p>1888년 작곡된 이 곡의 제목은 고대 그리스 축제에서 젊은이들이 추던 춤에서 유래했다고 알려져 있습니다. 3/4박자의 느린 왈츠 리듬을 타고 흐르는 절제된 선율은, 마치 시간이 멈춘 듯한 신비롭고 몽환적인 분위기를 자아냅니다. 기쁨과 슬픔, 그 어느 쪽에도 치우치지 않는 담담한 선율은 듣는 이로 하여금 묘한 해방감을 느끼게 합니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>마음의 여백 만들기:</strong> 임신 중에는 호르몬 변화와 출산에 대한 두려움으로 머릿속이 복잡해지기 쉽습니다. 짐노페디의 단순하고 반복적인 음들은 복잡한 생각들을 지우고, 뇌가 쉴 수 있는 '여백'을 만들어줍니다.</p>
        <p><strong>아기에게 전하는 차분한 호흡:</strong> 음과 음 사이의 충분한 침묵은 엄마와 아기 모두에게 깊은 호흡을 할 수 있는 여유를 선물합니다. 화려하지 않지만 투명한 피아노 소리는 태아의 청각을 자극하지 않으면서도 편안한 안도감을 줍니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>입덧으로 인해 예민해져 있거나, 불면증으로 잠 못 이루는 새벽에 듣기를 추천합니다. 눈을 감고 소리가 공기 중에 퍼졌다 사라지는 잔향을 느껴보세요. 무거운 몸과 마음이 깃털처럼 가벼워지는 것을 경험할 수 있습니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Between Eccentric and Revolutionary, Erik Satie</h2>
        <p>Erik Satie was a unique composer who rejected the excessive emotional expression and grandeur of Romantic music, which was mainstream at the time. He believed that music should not overwhelm or demand the listener's attention but should blend naturally into the space like furniture. His philosophy greatly influenced the birth of 'Minimalism' and 'Ambient Music'.</p>
      </section>

      <section>
        <h2>2. Gymnopédie: Dance of Ancient Greece</h2>
        <p>Composed in 1888, the title is said to originate from dances performed by youths at ancient Greek festivals. The restrained melody flowing on a slow 3/4 waltz rhythm creates a mysterious and dreamy atmosphere as if time has stopped. The calm melody, neither joyful nor sad, gives the listener a strange sense of liberation.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Creating Space in the Mind:</strong> During pregnancy, it is easy for the mind to become cluttered due to hormonal changes and fear of childbirth. The simple and repetitive notes of Gymnopédie erase complex thoughts and create 'space' for the brain to rest.</p>
        <p><strong>Calm Breathing for Baby:</strong> The ample silence between notes gives both mom and baby room to breathe deeply. The transparent piano sound, while not flashy, gives comfortable relief without irritating the fetus's hearing.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Recommended when sensitive due to morning sickness or during sleepless nights. Close your eyes and feel the reverberation of sound spreading and vanishing in the air. You can experience your heavy body and mind becoming as light as a feather.</p>
      </section>
    `
  },
  {
    id: 'vivaldi-four-seasons-sensory',
    title: '[태교 클래식] 비발디 ‘사계’: 뱃속에서 느끼는 사계절의 감각 자극',
    titleEn: '[Classical Focus] Vivaldi \'The Four Seasons\': Seasonal Sensory Stimulation for the Womb',
    date: '2026-02-10',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '봄의 생동감부터 겨울의 포근함까지. 비발디의 걸작이 태아의 오감을 깨우는 다채로운 소리의 풍경.',
    excerptEn: 'From the vitality of spring to the coziness of winter. Vivaldi\'s masterpiece offers colorful soundscapes that awaken the fetus\'s five senses.',
    content: `
      <section>
        <h2>1. 자연을 그린 소리의 화가, 안토니오 비발디</h2>
        <p>이탈리아의 작곡가 안토니오 비발디(Antonio Vivaldi)는 ‘붉은 머리의 사제’라는 별명으로 불렸습니다. 그는 바이올린의 기교를 극한으로 끌어올리며, 음악으로 풍경을 그리는 데 탁월한 재능을 보였습니다. 그의 대표작 ‘사계(The Four Seasons)’는 계절의 변화를 생생한 소리로 표현한 표제 음악의 효시로 평가받습니다.</p>
      </section>

      <section>
        <h2>2. 사계절이 주는 다양한 청각 자극</h2>
        <p>비발디의 사계는 각 계절마다 뚜렷하게 다른 분위기와 리듬을 가지고 있어, 태아에게 다양한 청각적 자극을 줄 수 있는 최고의 교재입니다.</p>
        <ul>
          <li><strong>봄(Spring):</strong> 새들의 지저귐과 시냇물 소리를 묘사한 바이올린 선율은 태아의 뇌세포를 깨우는 맑고 경쾌한 자극을 줍니다.</li>
          <li><strong>여름(Summer):</strong> 나른한 오후와 폭풍우의 역동성은 리듬감을 키워줍니다.</li>
          <li><strong>가을(Autumn):</strong> 수확의 기쁨과 사냥의 흥겨움은 긍정적인 에너지를 전달합니다.</li>
          <li><strong>겨울(Winter):</strong> 차가운 바람 뒤에 찾아오는 난로가의 따스함은 포근한 안정감을 줍니다.</li>
        </ul>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>오감 발달을 위한 상상 태교:</strong> 음악을 들으며 아기에게 계절의 이미지를 설명해 주세요. “우리 아기, 지금은 꽃이 활짝 핀 봄이야. 따뜻한 햇살이 느껴지니?”라고 말을 걸며 듣는 것이 중요합니다. 다양한 빠르기와 강약의 변화는 태아의 신경 회로를 다채롭게 자극하여 감성 지능(EQ) 발달에 도움을 줍니다.</p>
      </section>

      <section>
        <h2>4. 추천 감상 시간</h2>
        <p>계절의 변화가 느껴지는 아침이나, 산책을 다녀온 후 휴식 시간에 듣기를 추천합니다. 특히 ‘봄’ 1악장은 아침을 여는 기상 음악으로 아주 좋습니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Antonio Vivaldi, the Painter of Sound</h2>
        <p>Italian composer Antonio Vivaldi was nicknamed the ‘Red Priest’. He pushed the limits of violin technique and showed exceptional talent in painting landscapes with music. His masterpiece, ‘The Four Seasons’, is considered the precursor to program music, vividly expressing the changing seasons through sound.</p>
      </section>

      <section>
        <h2>2. Diverse Auditory Stimulation from Four Seasons</h2>
        <p>Vivaldi's Four Seasons has a distinctly different atmosphere and rhythm for each season, making it the best textbook for providing diverse auditory stimulation to the fetus.</p>
        <ul>
          <li><strong>Spring:</strong> Violin melodies depicting birds chirping and streams flowing give clear and cheerful stimulation that awakens fetal brain cells.</li>
          <li><strong>Summer:</strong> The languid afternoon and dynamics of a storm cultivate a sense of rhythm.</li>
          <li><strong>Autumn:</strong> The joy of harvest and the excitement of the hunt convey positive energy.</li>
          <li><strong>Winter:</strong> The warmth by the fireplace after the cold wind gives a cozy sense of security.</li>
        </ul>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Imaginative Prenatal Care for Sensory Development:</strong> Describe the images of the seasons to your baby while listening. It creates a richer experience if you say, "Baby, it's spring with flowers in full bloom. Can you feel the warm sunshine?" The variations in tempo and dynamics stimulate the fetus's neural circuits in various ways, helping emotional intelligence (EQ) development.</p>
      </section>

      <section>
        <h2>4. Recommended Listening Time</h2>
        <p>Recommended for mornings when you feel the change of seasons or during rest after a walk. In particular, the first movement of ‘Spring’ is excellent as wake-up music.</p>
      </section>
    `
  },
  {
    id: 'beethoven-emperor-confidence',
    title: '[태교 클래식] 베토벤 피아노 협주곡 5번 ‘황제’: 우리 아이, 자신감 넘치는 리더로',
    titleEn: '[Classical Focus] Beethoven Piano Concerto No. 5 \'Emperor\': Raising a Confident Leader',
    date: '2026-02-12',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '웅장하고 당당한 기상이 느껴지는 베토벤의 역작. 태아에게 긍정적인 에너지와 자신감을 심어주는 음악.',
    excerptEn: 'Beethoven\'s masterpiece felt with majestic and dignified spirit. Music that instills positive energy and confidence in the fetus.',
    content: `
      <section>
        <h2>1. 고난을 넘어 환희로, 악성 베토벤</h2>
        <p>루트비히 판 베토벤(Ludwig van Beethoven)은 청각 상실이라는 음악가로서 치명적인 시련을 이겨내고 불멸의 명곡들을 남겼습니다. 그의 음악에는 운명에 굴하지 않는 불굴의 의지와 인간 승리의 드라마가 담겨 있습니다. 이는 뱃속의 아기에게 강인한 생명력과 용기를 전달하는 훌륭한 매개체가 됩니다.</p>
      </section>

      <section>
        <h2>2. 왜 ‘황제(Emperor)’인가?</h2>
        <p>피아노 협주곡 5번은 그 규모와 내용 면에서 타의 추종을 불허할 만큼 웅장하고 당당하여 ‘황제’라는 별칭이 붙었습니다. 특히 1악장의 도입부는 오케스트라의 힘찬 화음과 화려한 피아노 카덴차가 어우러져 듣는 이에게 가슴 벅찬 감동과 호연지기를 느끼게 합니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>자신감과 리더십 배양:</strong> 이 곡의 힘차고 긍정적인 에너지는 태아에게 "넌 할 수 있어", "넌 아주 소중한 존재야"라고 말해주는 듯한 자신감을 심어줍니다. 씩씩하고 활발한 아이로 자라기를 바라는 마음을 담아 감상해 보세요.</p>
        <p><strong>엄마의 우울감 해소:</strong> 임신 중 찾아올 수 있는 무기력함이나 우울감을 날려버리는 데 탁월합니다. 웅장한 오케스트라 사운드가 가슴을 뻥 뚫어주는 시원한 카타르시스를 선사합니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>나른한 오후, 활력이 필요할 때나 태동이 활발할 때 들으면 좋습니다. 아기가 뱃속에서 힘차게 발길질을 할 때, "우리 아기 아주 튼튼하네!"라고 칭찬하며 함께 들어보세요.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Beyond Hardship to Joy, Beethoven</h2>
        <p>Ludwig van Beethoven overcame the fatal trial of hearing loss and left immortal masterpieces. His music contains an indomitable will not to yield to fate and the drama of human victory. This serves as an excellent medium to convey strong vitality and courage to the baby in the womb.</p>
      </section>

      <section>
        <h2>2. Why 'Emperor'?</h2>
        <p>Piano Concerto No. 5 is nicknamed 'Emperor' because it is majestic and dignified enough to be unrivaled in scale and content. Specifically, the introduction of the first movement combines the powerful harmony of the orchestra and the flashy piano cadenza, giving the listener overwhelming emotion and adventurous spirit.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Cultivating Confidence and Leadership:</strong> The powerful and positive energy of this song instills confidence in the fetus as if saying "You can do it," "You are a very precious being." Listen with the hope that your child grows up to be brave and active.</p>
        <p><strong>Relieving Mom's Depression:</strong> It is excellent for blowing away lethargy or depression that may come during pregnancy. The majestic orchestra sound provides a refreshing catharsis.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Good to listen to on a languid afternoon when you need vitality or when fetal movement is active. When the baby kicks vigorously in the belly, listen together praising, "Our baby is very strong!"</p>
      </section>
    `
  },
  {
    id: 'schubert-serenade-romance',
    title: '[태교 클래식] 슈베르트 ‘세레나데’: 사랑을 속삭이는 가장 로맨틱한 선율',
    titleEn: '[Classical Focus] Schubert \'Serenade\': The Most Romantic Melody Whispering Love',
    date: '2026-02-14',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '가곡의 왕 슈베르트가 남긴 애절하고 아름다운 사랑의 노래. 태아와 엄마의 정서적 유대감을 깊게 해주는 감성 태교.',
    excerptEn: 'A sorrowful and beautiful love song left by the King of Lieder, Schubert. Emotional prenatal care that deepens the emotional bond between fetus and mother.',
    content: `
      <section>
        <h2>1. 가곡의 왕, 프란츠 슈베르트</h2>
        <p>슈베르트(Franz Schubert)는 짧은 생애 동안 600여 곡의 가곡을 작곡하며 ‘가곡의 왕’이라 불립니다. 그의 음악은 시적인 감수성과 아름다운 멜로디가 특징이며, 사람의 목소리와 가장 닮은 악기들의 선율을 통해 듣는 이의 마음을 파고듭니다.</p>
      </section>

      <section>
        <h2>2. 연인을 향한 간절한 호소, 세레나데</h2>
        <p>‘백조의 노래’ 중 4번째 곡인 ‘세레나데(Serenade)’는 밤에 연인의 창가에서 부르는 사랑 노래입니다. 단조와 장조를 오가며 흔들리는 연심을 표현한 이 곡은, 애절하면서도 감미로운 선율로 전 세계인의 사랑을 받고 있습니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>사랑의 언어 전달:</strong> 이 곡은 멜로디 자체가 ‘사랑’이라는 감정을 담고 있습니다. 음악을 들으며 아기에게 “엄마 아빠가 너를 얼마나 기다리고 사랑하는지 아니?”라고 속삭여주세요. 엄마의 사랑이 담긴 호르몬이 탯줄을 통해 아기에게 그대로 전달됩니다.</p>
        <p><strong>감수성 발달:</strong> 서정적이고 감상적인 멜로디는 태아의 우뇌를 자극하여 풍부한 감수성과 공감 능력을 키워주는 데 도움을 줍니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>잠들기 전 침대에 누워 편안하게 감상해 보세요. 부부가 함께 들으며 서로에 대한 애정과 아기에 대한 사랑을 확인하는 시간을 갖는다면 최고의 태교가 될 것입니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. King of Lieder, Franz Schubert</h2>
        <p>Schubert is called the 'King of Lieder', having composed over 600 songs during his short life. His music is characterized by poetic sensitivity and beautiful melodies, penetrating the listener's heart through melodies of instruments that most resemble the human voice.</p>
      </section>

      <section>
        <h2>2. Earnest Appeal to a Lover, Serenade</h2>
        <p>'Serenade', the 4th song in 'Schwanengesang', is a love song sung at a lover's window at night. Expressing wavering affection by switching between minor and major keys, this song is loved worldwide for its sorrowful yet sweet melody.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Conveying the Language of Love:</strong> The melody itself contains the emotion of 'love'. While listening, whisper to your baby, "Do you know how much Mom and Dad are waiting for and love you?" Hormones filled with mom's love are transmitted directly to the baby through the umbilical cord.</p>
        <p><strong>Developing Sensitivity:</strong> The lyrical and sentimental melody stimulates the fetus's right brain, helping to cultivate rich sensitivity and empathy.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Try listening comfortably lying in bed before going to sleep. It would be the best prenatal care if the couple listens together, confirming their affection for each other and love for the baby.</p>
      </section>
    `
  },
  {
    id: 'tchaikovsky-waltz-of-flowers-rhythm',
    title: '[태교 클래식] 차이콥스키 ‘꽃의 왈츠’: 아기와 함께 추는 행복한 춤',
    titleEn: '[Classical Focus] Tchaikovsky \'Waltz of the Flowers\': Happy Dance with Baby',
    date: '2026-02-16',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '호두까기 인형 중 가장 화려하고 아름다운 왈츠. 태아의 리듬감을 깨우고 엔돌핀을 돌게 하는 즐거운 음악.',
    excerptEn: 'The most splendid and beautiful waltz from The Nutcracker. Joyful music that awakens the fetus\'s sense of rhythm and circulates endorphins.',
    content: `
      <section>
        <h2>1. 멜로디의 마술사, 차이콥스키</h2>
        <p>러시아의 작곡가 표트르 일리치 차이콥스키(Pyotr Ilyich Tchaikovsky)는 발레 음악의 거장입니다. 그의 음악은 동화적인 상상력과 화려한 오케스트레이션이 특징이며, 누구나 한번 들으면 잊을 수 없는 매혹적인 선율을 자랑합니다.</p>
      </section>

      <section>
        <h2>2. 환상의 나라로 초대, 꽃의 왈츠</h2>
        <p>발레 ‘호두까기 인형’ 2막에 등장하는 ‘꽃의 왈츠(Waltz of the Flowers)’는 크리스마스 시즌에 가장 많이 울려 퍼지는 곡 중 하나입니다. 하프의 영롱한 도입부와 이어지는 호른, 현악기의 우아한 왈츠 리듬은 마치 꽃들이 춤을 추는 듯한 환상적인 분위기를 자아냅니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>리듬감 형성과 신체 발달:</strong> 3/4박자의 쿵-짝-짝 왈츠 리듬은 태아에게 규칙적인 리듬감을 익히게 해줍니다. 엄마가 리듬에 맞춰 가볍게 몸을 흔들거나 배를 토닥여주면, 태아의 평형 감각과 신체 발달에도 긍정적인 영향을 미칩니다.</p>
        <p><strong>행복 호르몬 분비:</strong> 밝고 화사한 선율은 듣는 즉시 기분을 좋게 만들어, 엄마 몸속에 엔돌핀이 돌게 합니다. 이는 태아에게도 고스란히 전달되어 ‘행복한 아기’로 자라게 합니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>집안일을 할 때나 가벼운 스트레칭을 할 때 배경음악으로 활용해 보세요. 우울하거나 짜증이 날 때 기분 전환용으로도 강력 추천합니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Magician of Melody, Tchaikovsky</h2>
        <p>Russian composer Pyotr Ilyich Tchaikovsky is a master of ballet music. His music is characterized by fairy-tale imagination and magnificent orchestration, boasting captivating melodies that no one can forget once heard.</p>
      </section>

      <section>
        <h2>2. Invitation to a Fantasy Land, Waltz of the Flowers</h2>
        <p>'Waltz of the Flowers', appearing in Act 2 of the ballet 'The Nutcracker', is one of the most played songs during the Christmas season. The lucid harp introduction followed by the elegant waltz rhythm of horns and strings create a fantastic atmosphere as if flowers are dancing.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Rhythm Formation and Physical Development:</strong> The 3/4 waltz rhythm helps the fetus learn a regular sense of rhythm. If mom sways her body lightly or pats her belly to the rhythm, it positively affects the fetus's sense of balance and physical development.</p>
        <p><strong>Secretion of Happy Hormones:</strong> The bright and radiant melody improves the mood immediately upon listening, circulating endorphins in mom's body. This is transmitted to the fetus, helping it grow into a 'happy baby'.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Use it as background music when doing house chores or light stretching. Strongly recommended for mood enhancement when feeling depressed or irritable.</p>
      </section>
    `
  },
  {
    id: 'haydn-serenade-bright-mind',
    title: '[태교 클래식] 하이든 현악 4중주 ‘세레나데’: 똑똑한 아기를 위한 명랑한 울림',
    titleEn: '[Classical Focus] Haydn String Quartet \'Serenade\': Cheerful Resonance for a Smart Baby',
    date: '2026-02-18',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '교향곡의 아버지 하이든의 밝고 순수한 선율. 태아의 두뇌를 맑게 하고 긍정적인 성격을 만들어주는 명랑한 곡.',
    excerptEn: 'Bright and pure melody of Haydn, the Father of the Symphony. Cheerful song that clears the fetus\'s brain and builds a positive personality.',
    content: `
      <section>
        <h2>1. 유머와 위트의 음악가, 요제프 하이든</h2>
        <p>하이든(Joseph Haydn)은 소나타 형식을 완성한 고전파의 거장으로, 모차르트와 베토벤에게도 큰 영향을 주었습니다. 그의 음악은 언제나 밝고 건전하며, 유머러스한 재치로 가득 차 있어 ‘파파 하이든’이라는 친근한 애칭으로 불리기도 합니다.</p>
      </section>

      <section>
        <h2>2. 단순함 속에 깃든 순수함, 세레나데</h2>
        <p>현악 4중주 F장조의 2악장은 우리에게 ‘하이든의 세레나데’로 널리 알려져 있습니다(실제로는 호프슈테터의 곡이라는 설도 있습니다). 바이올린이 주도하는 사랑스럽고 소박한 멜로디는 마치 어린아이의 웃음소리처럼 순수하고 꾸밈이 없습니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>두뇌 명석함과 논리력:</strong> 하이든 음악의 간결하고 명확한 형식미는 태아의 뇌가 복잡하지 않게 받아들일 수 있는 최적의 자극입니다. 군더더기 없는 깔끔한 선율은 사고를 명료하게 하고 집중력을 높여줍니다.</p>
        <p><strong>긍정적인 성격 형성:</strong> 맑고 경쾌한 현악기의 피치카토(현을 뜯는 연주법)는 태아에게 즐거운 자극을 줍니다. 걱정 근심 없는 밝은 에너지는 아이가 긍정적이고 낙천적인 성격을 형성하는 데 도움을 줍니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>아침 식사 시간이나 태교 동화를 읽어줄 때 배경음악으로 틀어놓기 좋습니다. 밝은 햇살이 들어오는 거실에서 이 곡을 들으며 태담을 나누어 보세요.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Musician of Humor and Wit, Joseph Haydn</h2>
        <p>Haydn was a master of the Classical era who completed the sonata form, greatly influencing Mozart and Beethoven. His music is always bright, wholesome, and full of humorous wit, earning him the affectionate nickname 'Papa Haydn'.</p>
      </section>

      <section>
        <h2>2. Purity within Simplicity, Serenade</h2>
        <p>The second movement of the String Quartet in F Major is widely known to us as 'Haydn's Serenade' (though some say it is actually by Hoffstetter). The lovely and simple melody led by the violin is pure and unadorned like a child's laughter.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Brain Clarity and Logic:</strong> The concise and clear formal beauty of Haydn's music is the optimal stimulation that the fetal brain can accept without complexity. The clean melody without superfluity clarifies thinking and improves concentration.</p>
        <p><strong>Forming a Positive Personality:</strong> The clear and cheerful pizzicato (plucking strings) of string instruments gives joyful stimulation to the fetus. The bright energy without worries helps the child form a positive and optimistic personality.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Good to play as background music during breakfast or when reading prenatal fairy tales. Chat with your baby while listening to this song in the living room with bright sunshine.</p>
      </section>
    `
  },
  {
    id: 'mendelssohn-wings-of-song-imagination',
    title: '[태교 클래식] 멘델스존 ‘노래의 날개 위에’: 엄마와 아기가 떠나는 상상 여행',
    titleEn: '[Classical Focus] Mendelssohn \'On Wings of Song\': Imaginative Journey for Mom & Baby',
    date: '2026-02-20',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '낭만적인 시와 아름다운 선율의 만남. 풍부한 상상력을 자극하고 정서적 안정을 주는 멘델스존의 명곡.',
    excerptEn: 'Meeting of romantic poetry and beautiful melody. Mendelssohn\'s masterpiece that stimulates rich imagination and gives emotional stability.',
    content: `
      <section>
        <h2>1. 행복한 천재, 펠릭스 멘델스존</h2>
        <p>멘델스존(Felix Mendelssohn)은 부유하고 화목한 가정에서 자라 구김살 없는 밝고 우아한 음악을 많이 남겼습니다. 그의 작품은 회화적이고 묘사적이어서, 음악을 듣는 것만으로도 한 폭의 그림을 보는 듯한 느낌을 줍니다.</p>
      </section>

      <section>
        <h2>2. 하이네의 시에 붙인 노래</h2>
        <p>‘노래의 날개 위에(On Wings of Song)’는 독일의 시인 하이네의 시에 곡을 붙인 가곡입니다. 사랑하는 사람과 함께 노래의 날개를 타고 갠지스 강변의 아름다운 화원으로 날아가고 싶다는 낭만적인 내용을 담고 있습니다. 유려하게 흐르는 피아노 반주와 감미로운 선율은 마치 꿈속을 비행하는 듯한 느낌을 줍니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>이미지 트레이닝 태교:</strong> 가사의 내용처럼 아기와 함께 아름다운 곳으로 여행을 떠나는 상상을 해보세요. “우리 아가, 엄마랑 시원한 바람을 타고 꽃밭으로 가볼까?”라고 생각하며 구체적인 이미지를 떠올리면, 엄마의 행복한 뇌파가 태아에게 전달되어 뇌 발달을 촉진합니다.</p>
        <p><strong>우아한 감성 함양:</strong> 멘델스존 특유의 세련되고 기품 있는 선율은 태아에게 예술적인 감각을 심어줍니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>나른한 오후의 낮잠 시간이나, 태교 여행을 떠날 때 차 안에서 듣기 좋습니다. 현실의 스트레스를 잊고 환상적인 휴식을 취하고 싶을 때 추천합니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. The Happy Genius, Felix Mendelssohn</h2>
        <p>Mendelssohn grew up in a wealthy and harmonious family, leaving behind much bright and elegant music without wrinkles. His works are pictorial and descriptive, giving the feeling of looking at a painting just by listening.</p>
      </section>

      <section>
        <h2>2. Song Set to Heine's Poem</h2>
        <p>'On Wings of Song' is a Lied set to a poem by German poet Heine. It contains romantic content about wanting to fly to a beautiful garden by the Ganges River on the wings of song with a loved one. The flowing piano accompaniment and sweet melody feel like flying in a dream.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Image Training Prenatal Care:</strong> Imagine traveling to a beautiful place with your baby like the lyrics. Thinking of specific images like "Baby, shall we go to a flower garden riding a cool breeze?" transmits mom's happy brainwaves to the fetus, promoting brain development.</p>
        <p><strong>Cultivating Elegant Sensitivity:</strong> Mendelssohn's unique sophisticated and graceful melody instills an artistic sense in the fetus.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Good to listen to during a nap on a lazy afternoon or in the car when going on a babymoon. Recommended when you want to forget reality's stress and take a fantastic rest.</p>
      </section>
    `
  },
  {
    id: 'schumann-traumerei-dreams',
    title: '[태교 클래식] 슈만 ‘트로이메라이’: 아기의 예쁜 꿈을 위한 자장가',
    titleEn: '[Classical Focus] Schumann \'Träumerei\': A Lullaby for Baby\'s Sweet Dreams',
    date: '2026-02-22',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '어른들을 위한 동화, 어린이 정경 중 가장 유명한 곡. 꿈꾸는 듯한 몽환적인 선율이 선사하는 깊은 휴식.',
    excerptEn: 'Fairy tale for adults, the most famous piece from Scenes from Childhood. Deep relaxation presented by dreamy melodies.',
    content: `
      <section>
        <h2>1. 동심을 노래한 시인, 로베르트 슈만</h2>
        <p>슈만(Robert Schumann)은 음악을 통해 시적인 감정을 표현하는 데 탁월했습니다. ‘어린이 정경(Kinderszenen)’은 그가 어린 시절의 추억과 동심을 회상하며 쓴 피아노 모음곡으로, 아이들의 순수한 세계를 어른의 시선으로 아름답게 그려냈습니다.</p>
      </section>

      <section>
        <h2>2. 꿈(Traumerei)을 꾸는 듯한 선율</h2>
        <p>모음곡 중 7번째 곡인 ‘트로이메라이(Träumerei)’는 ‘꿈’이라는 뜻을 가지고 있습니다. 단순해 보이지만 신비로운 화성 진행과 부드러운 멜로디 라인은 듣는 이를 순식간에 꿈의 세계로 인도합니다. 전 세계적으로 가장 사랑받는 앙코르 곡이자 자장가 중 하나입니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>깊은 이완과 숙면 유도:</strong> 느리고 서정적인 템포는 심박수를 낮추고 부교감 신경을 활성화하여 엄마와 태아 모두를 깊은 이완 상태로 이끕니다. 잠투정이 심한 신생아에게 들려주어도 효과가 좋습니다.</p>
        <p><strong>상상력과 창의력 발달:</strong> 몽환적인 분위기는 뇌의 알파파를 유도하여 창의적인 사고를 돕습니다. 아기가 뱃속에서 예쁜 꿈을 꿀 수 있도록 잠들기 전에 들려주세요.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>잠자리에 들기 전, 조명을 어둡게 하고 하루를 마무리하는 시간에 가장 적합합니다. 엄마가 먼저 편안한 마음으로 이 곡을 들으며 잠을 청하면 아기도 따라 편안해집니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Poet Who Sang Childhood, Robert Schumann</h2>
        <p>Schumann excelled at expressing poetic emotions through music. 'Scenes from Childhood (Kinderszenen)' is a piano suite written recalling childhood memories, beautifully depicting the pure world of children from an adult's perspective.</p>
      </section>

      <section>
        <h2>2. Melody like Dreaming (Träumerei)</h2>
        <p>The 7th piece of the suite, 'Träumerei', means 'Dream'. The simple yet mysterious harmonic progression and soft melody line instantly lead the listener to a world of dreams. It is one of the most loved encores and lullabies globally.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Deep Relaxation and Sleep Induction:</strong> The slow and lyrical tempo lowers the heart rate and activates the parasympathetic nervous system, leading both mom and fetus to a deep state of relaxation. It is also effective for fussy newborns.</p>
        <p><strong>Development of Imagination and Creativity:</strong> The dreamy atmosphere induces alpha waves in the brain, aiding creative thinking. Play it before sleep so the baby can have sweet dreams in the womb.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Most suitable for winding down the day with dim lights before bed. If mom listens to this song with a comfortable mind and tries to sleep, the baby will also become comfortable.</p>
      </section>
    `
  },
  {
    id: 'handel-water-music-refresh',
    title: '[태교 클래식] 헨델 ‘수상 음악’: 템즈강 위에서 펼쳐지는 상쾌한 축제',
    titleEn: '[Classical Focus] Handel \'Water Music\': Refreshing Festival on the Thames',
    date: '2026-02-24',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '탁 트인 야외에서 듣는 듯한 시원함과 활기. 스트레스를 날려버리고 태아에게 신선한 산소를 공급하는 음악.',
    excerptEn: 'Coolness and vitality like listening outdoors. Music that blows away stress and supplies fresh oxygen to the fetus.',
    content: `
      <section>
        <h2>1. 음악의 어머니, 게오르크 프리드리히 헨델</h2>
        <p>독일에서 태어나 영국에서 활동한 헨델(George Frideric Handel)은 대중적이고 웅장한 음악으로 큰 사랑을 받았습니다. 바흐가 내면적인 깊이를 추구했다면, 헨델은 외향적이고 화려한 아름다움을 추구했습니다.</p>
      </section>

      <section>
        <h2>2. 왕을 위한 뱃놀이 음악</h2>
        <p>‘수상 음악(Water Music)’은 영국 왕 조지 1세가 템즈강에서 뱃놀이를 할 때 연주하기 위해 작곡되었습니다. 야외에서 연주되었기 때문에 호른, 트럼펫 같은 금관악기와 오보에, 바순 같은 목관악기가 많이 사용되어 소리가 시원시원하고 경쾌합니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>스트레스 해소와 기분 전환:</strong> 꽉 막힌 실내에 있어도 마치 강가에 나와 있는 듯한 착각을 불러일으키는 곡입니다. 임신 중 답답함이 느껴질 때 이 곡을 들으면 가슴이 뻥 뚫리는 듯한 상쾌함을 느낄 수 있습니다. 엄마의 스트레스가 해소되면 혈관이 이완되어 태아에게 신선한 산소와 영양분이 원활하게 공급됩니다.</p>
        <p><strong>청각적 다양성:</strong> 다양한 관악기의 음색은 태아에게 다채로운 소리 자극을 주어 청각 발달에 도움을 줍니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>화창한 날 창문을 열고 환기할 때, 혹은 목욕을 하거나 샤워를 할 때 들으면 상쾌함이 배가됩니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Mother of Music, George Frideric Handel</h2>
        <p>Born in Germany and active in England, Handel was loved for his popular and majestic music. While Bach sought inner depth, Handel pursued extroverted and magnificent beauty.</p>
      </section>

      <section>
        <h2>2. Boating Music for the King</h2>
        <p>'Water Music' was composed for King George I of England to play while boating on the River Thames. Since it was played outdoors, brass instruments like horns and trumpets and woodwinds like oboes and bassoons were used heavily, making the sound refreshing and cheerful.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Stress Relief and Mood Change:</strong> It makes you feel like you are out by the river even if you are indoors. Listening to this song when feeling stuffy during pregnancy gives a refreshing feeling. When mom's stress is relieved, blood vessels relax, supplying fresh oxygen and nutrients smoothly to the fetus.</p>
        <p><strong>Auditory Diversity:</strong> The timbres of various wind instruments provide colorful sound stimulation to the fetus, helping auditory development.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Refreshing feeling doubles when listening while opening windows on a sunny day, or when taking a bath or shower.</p>
      </section>
    `
  },
  {
    id: 'liszt-liebestraum-passion',
    title: '[태교 클래식] 리스트 ‘사랑의 꿈’: 태아를 향한 엄마의 뜨거운 고백',
    titleEn: '[Classical Focus] Liszt \'Liebestraum\': Mom\'s Passionate Confession to Baby',
    date: '2026-02-26',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '피아노의 거장 리스트가 들려주는 낭만적인 사랑 이야기. 열정적이고 풍부한 감성을 아기에게 전해주는 곡.',
    excerptEn: 'Romantic love story told by piano master Liszt. Song conveying passionate and rich emotions to the baby.',
    content: `
      <section>
        <h2>1. 피아노의 비르투오소, 프란츠 리스트</h2>
        <p>리스트(Franz Liszt)는 19세기 최고의 피아니스트이자 작곡가였습니다. ‘피아노의 신’이라 불릴 만큼 뛰어난 기교를 가졌던 그는, 동시에 문학과 예술에 깊은 조예를 가진 낭만주의자였습니다.</p>
      </section>

      <section>
        <h2>2. 영원한 사랑을 노래하다</h2>
        <p>‘사랑의 꿈(Liebestraum)’ 제3번은 원래 가곡으로 작곡되었다가 피아노곡으로 편곡된 작품입니다. “사랑할 수 있는 한 사랑하라”라는 시 구절을 바탕으로 하고 있으며, 감미로운 선율이 격정적인 클라이맥스로 치달았다가 다시 고요하게 마무리되는 드라마틱한 구성을 가지고 있습니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>풍부한 감정 표출:</strong> 임신 중에는 감정이 예민해지기 쉽습니다. 이 곡의 드라마틱한 전개에 몸을 맡기며 엄마의 감정을 솔직하게 느껴보세요. 억눌러왔던 감정을 음악으로 표출하는 것은 정신 건강에 매우 좋습니다.</p>
        <p><strong>태아와의 정서적 교감:</strong> 클라이맥스 부분에서 벅차오르는 사랑의 감정을 아기에게 전해보세요. “엄마는 너를 사랑해, 빨리 만나고 싶어”라는 마음을 담아 들으면, 태아도 그 뜨거운 사랑을 느낄 것입니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>감정이 충만한 저녁 시간이나, 남편과 함께 오붓한 시간을 보낼 때 추천합니다. 태교 일기를 쓰면서 배경음악으로 들어도 좋습니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Piano Virtuoso, Franz Liszt</h2>
        <p>Liszt was the greatest pianist and composer of the 19th century. Possessing technique superb enough to be called the 'God of Piano', he was also a romanticist with deep knowledge of literature and art.</p>
      </section>

      <section>
        <h2>2. Singing Eternal Love</h2>
        <p>'Liebestraum (Love Dream) No. 3' was originally composed as a song and arranged for piano. Based on the line "Love as long as you can love", it has a dramatic structure where a sweet melody rises to a passionate climax and finishes quietly.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Rich Emotional Expression:</strong> Emotions can easily become sensitive during pregnancy. Surrender to the dramatic development of this song and feel your emotions honestly. Expressing suppressed emotions through music is very good for mental health.</p>
        <p><strong>Emotional Bonding with Fetus:</strong> Convey the overwhelming emotion of love to the baby at the climax. If you listen with the heart saying "Mom loves you, I want to see you soon," the fetus will also feel that hot love.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Recommended for emotional evenings or when spending intimate time with your husband. Also good as background music when writing a prenatal diary.</p>
      </section>
    `
  },
  {
    id: 'dvorak-humoresque-joy',
    title: '[태교 클래식] 드보르자크 ‘유모레스크’: 기분 좋은 산책을 위한 경쾌한 리듬',
    titleEn: '[Classical Focus] Dvořák \'Humoresque\': Cheerful Rhythm for a Pleasant Walk',
    date: '2026-02-28',
    category: '명곡 해설',
    categoryEn: 'Masterpiece Guide',
    excerpt: '체코의 민족성을 담은 소박하고 유쾌한 멜로디. 깡충거리는 듯한 리듬이 태아에게 즐거운 자극을 주는 곡.',
    excerptEn: 'Simple and pleasant melody containing Czech nationality. Skipping rhythm gives joyful stimulation to the fetus.',
    content: `
      <section>
        <h2>1. 향수의 작곡가, 안토닌 드보르자크</h2>
        <p>체코가 낳은 위대한 작곡가 드보르자크(Antonín Dvořák)는 고향 보헤미아의 민속적인 선율을 클래식에 접목시켰습니다. 그의 음악은 흙냄새가 나는 듯 소박하고 정겨우며, 누구에게나 친근하게 다가옵니다.</p>
      </section>

      <section>
        <h2>2. 기차 소리에서 영감을 얻은 유모레스크</h2>
        <p>‘유모레스크(Humoresque)’는 ‘유머러스한 곡’이라는 뜻입니다. 제7번은 드보르자크가 기차를 타고 가다가 덜컹거리는 리듬에서 영감을 받아 작곡했다고 합니다. 우아하면서도 어딘가 익살스러운 독특한 리듬이 특징으로, 한번 들으면 콧노래가 나올 만큼 중독성이 강합니다.</p>
      </section>

      <section>
        <h2>3. 태교를 위한 감상 포인트</h2>
        <p><strong>기분 전환과 활력 충전:</strong> 깡충깡충 뛰는 듯한 붓점 리듬은 가라앉은 기분을 업(Up)시켜주는 효과가 있습니다. "우리 아기도 뱃속에서 춤추고 있니?"라고 물으며 가볍게 박자를 맞춰보세요.</p>
        <p><strong>소뇌 발달 자극:</strong> 독특하고 변칙적인 리듬은 태아의 운동 신경을 담당하는 소뇌 발달에 긍정적인 영향을 줍니다.</p>
      </section>

      <section>
        <h2>4. 함께 들으면 좋은 시간</h2>
        <p>가벼운 산책을 할 때나 집안을 정리할 때 듣기를 추천합니다. 아기가 뱃속에서 놀고 있을 때 들려주면 더욱 활발한 태동을 느낄 수 있습니다.</p>
      </section>
    `,
    contentEn: `
      <section>
        <h2>1. Composer of Nostalgia, Antonín Dvořák</h2>
        <p>Czech's great composer Dvořák grafted the folk melodies of his hometown Bohemia into classical music. His music is simple and affectionate like the smell of earth, approaching everyone in a friendly way.</p>
      </section>

      <section>
        <h2>2. Humoresque Inspired by Train Sounds</h2>
        <p>'Humoresque' means 'humorous piece'. No. 7 is said to have been composed by Dvořák inspired by the clattering rhythm while riding a train. It features a unique rhythm that is elegant yet somewhat comical, addictive enough to hum along once heard.</p>
      </section>

      <section>
        <h2>3. Listening Points for Prenatal Care</h2>
        <p><strong>Mood Change and Vitality Charge:</strong> The skipping dotted rhythm has the effect of uplifting a sunken mood. Ask "Is our baby dancing in the belly?" and lightly tap to the beat.</p>
        <p><strong>Cerebellum Development Stimulation:</strong> The unique and irregular rhythm positively affects the development of the cerebellum responsible for the fetus's motor nerves.</p>
      </section>

      <section>
        <h2>4. Best Time to Listen</h2>
        <p>Recommended when taking a light walk or tidying up the house. If played when the baby is playing in the womb, you can feel more active fetal movements.</p>
      </section>
    `
  }
];
