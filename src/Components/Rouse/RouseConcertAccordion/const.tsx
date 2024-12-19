import EvergreenPicture from "../../../assets/images/EvergreenPicture.jpeg";

interface ConcertPiece {
  panelId: string;
  title: string;
  composer: string;
  details: string;
  publisher: string;
  grade: string;
  time: string;
  year?: string;
  conductor?: string;
  soloist?: string;
  imgSrc?: string;
  directorNotes?: any;
}

export const rouseAccordionData: ConcertPiece[] = [
  {
    panelId: "panel1",
    title: "Commando March",
    composer: "Samuel Barber/R. Anderson Collinsworth",
    publisher: "G. Schirmer/Hal Leonard",
    year: "2009",
    grade: "4",
    time: "3:34",
    details: `When famed composer Samuel Barber joined the United States Army in 1942, he quickly went to work writing music for the war effort.  Though not officially commissioned to do so by the US government, Barber’s first work after his military induction was Commando March, and it was premiered by the Army Air Forces Technical Command Training Band in early 1943.  Commando March enjoyed immediate success as the Goldman Band played the work throughout the summer of 1943, leading to a request by Serge Koussevitzky for Barber to adapt it for orchestra.  The orchestral adaptation received its premiere with the Boston Symphony under the baton of Koussevitzky in October of 1943.
    
    The rapid pace of composition, premiere, achieving popular success and orchestral adaptation in the same calendar year can be attributed to Barber’s high status as one of the most widely-accepted American composers of his time.  Barber’s music gathered broad acclaim not just among his American colleagues, but throughout Europe as well, solidifying him as one of the titans of twentieth-century American music.  Commando March endures as a cornerstone work for wind band, standing as the singular, yet beloved contribution to the band genre from a two-time Pulitzer Prize winning icon of American music.

    -Program note by Chris Nelson, adapted from score notes by R. Anderson Collinsworth`,
    directorNotes: (
      <>
        One of the wonderful traditions at Midwest is the performance of a march
        as part of the group’s program. <u>Commando March</u> was an easy choice
        for us. Our 2024 seniors were freshmen during the fall of 2020, the
        height of the pandemic, and it was also my first year as the Director of
        Bands. We chose <u>Commando March</u> to perform for our contest /
        festival program and enjoyed working on it despite all that was going on
        in our world at the time.
        <br />
        <br />
        Today’s performance of <u>Commando March</u> is dedicated to our 2024
        Rouse Honor Band seniors in celebration of their contributions and
        dedication to the Rouse Band program.
      </>
    ),
  },
  {
    panelId: "panel2",
    title: "Ye Banks and Braes O' Bonnie Doon",
    composer: "Percy Aldridge Grainger",
    publisher: "G. Schirmer/Hal Leonard",
    year: "1936",
    grade: "3",
    time: "2:55",
    details: `Grainger’s arrangement of the Scottish song The Caledonian Hunt’s Delight became Ye Banks and Braes O Bonnie Doon. The river Doon flows gracefully between the Loch Doon and the Firth of Clyde in Stirlingshire, Scotland. It was inspired by Robert Burns poem, The Banks of Doon, written in 1783. 

    Oh, banks and hills of lovely Doon,
    How can you bloom so fresh and fair;
    How can you chant, diminutive birds,
    When I'm so weary, full of care!
    You'll break my heart, small warblers,
    Flittering through the flowering thorn:
    Reminding me of long-lost joys,
    Departed―never to return!

    I've often wandered lovely Doon,
    To see the rose and woodbine twine;
    And as the lark sang of its love,
    Just as fondly, I sang of mine.
    Then gaily-hearted I plucked a rose,
    So fragrant upon its thorny tree;
    And my false lover stole my rose,
    But, ah!, he left the thorn in me.

    (modern English translation by Michael R. Burch)

    The piece was originally scored in 1903 for a chorus of women’s unison voices, accompanied by men’s voices, whistlers, and harmonium or organ at will. This was one of Grainger’s earliest folk-music arrangements, and it was dedicated to his dear friend Sigurd Fornander. The setting for band was completed in 1932 (British Folk-Music Setting Nt. 31) and could be combined with the original choral arrangement.

    - Program note by the Boise State University Symphonic Winds concert program, 5 March 2015`,
    conductor: "Thomas Bennett",
  },
  {
    panelId: "panel3",
    title: "Fission",
    composer: "John Mackey",
    publisher: "Osti Music",
    year: "2024",
    grade: "5",
    time: "4:40",
    details: `Fission is an exhilarating and dynamic work and is the concert band adaptation of Mackey’s contribution to Carolina Crown Drum and Bugle Corps 2024 show, “Promethean.” Known for his energetic and innovative compositions, Mackey has once again captured the imagination of performers and audiences alike with this electrifying work.

The piece draws its inspiration from the concept of nuclear fission, where the nucleus of an atom splits into smaller parts, releasing a significant amount of energy. This scientific process serves as a powerful metaphor for the explosive energy and rapid changes that characterize the piece. Listeners will experience a musical journey that mirrors the intense energy release and transformative nature of fission.

Fission received its original premiere at the 2024 Texas Bandmasters Association Convention. `,
    directorNotes: `John reached out in late April to let me know about this project he was working on with Carolina Crown. At the time, he could only share the drum corps version of the piece since the wind ensemble version had not been fully realized yet. The prospect of this project really excited me due to the uncommon adaptation of source material from drum corps to wind ensemble. To my knowledge, this is the first such adaptation (if not, it's certainly the most prolific).

    My apprehension got the best of me since there was not a final band version to see, so I passed on the opportunity to reserve it at that time and hoped I wouldn’t regret it later.

Fast forward two months later when John emailed me again while my wife and I were on vacation in Mexico. The piece was complete, so I could hear the midi and see the score. In my mind, we had already finalized our program, so you can imagine my angst at the thought of missing out on this opportunity a second time (while on vacation, nonetheless!). Knowing that this undertaking would be a challenge for everyone and especially our students, my aim was to finalize the program early so that they would have time to begin the learning process before the craziness of school and marching season started back up in August (iykyk). I mulled the pros and cons, consulted close friends and confidants (you know, typical enneagram six behaviors), and ultimately came to the conclusion that we HAD to do this. The rest was history.

Unfortunately, we were not able to have John join us for in-person clinics, but he was so fabulous to work with via shared recordings and correspondence through email / social media. He was so appreciative and complimentary of the ensemble’s work while also requesting changes or improvements. I loved being able to share his sentiments with our students. This piece is unique and unlike anything else on our program which made it an easy choice for inclusion. While challenging, I know this piece is one of the students’ favorites!`,
  },
  {
    panelId: "panel4",
    title: "Flight of the Ravens",
    composer: "Carol Brittin Chambers",
    publisher: "Aspenwood Music; The Music of Carol Brittin Chambers",
    year: "2023",
    grade: "3",
    time: "3:43",
    details: `Flight of the Ravens was commissioned by the Texas Lutheran University School of Music in 2023, dedicated with love and gratitude to Professor Beth Bronk for her work as Director of Bands at TLU, her thoughtful mentorship of students, and her friendship.

Quite a lot of mythology exists surrounding the raven, arguably one of the most intelligent birds. The raven is often central to the mythology of the Pacific Northwest Coast Native Americans, which depicts the bird as both creator and trickster.

In Flight of the Ravens, the opening piano and chimes are meant to evoke feelings of beauty, majesty, and respect (creator). The first main theme and energetic tempo (beginning at measure 12, then 20), pays tribute to the Pacific Northwest Coast region in general. The second theme (measure 31), is what I refer to as the “Soaring Theme.” Setting this theme in 3/4 meter was intentional, evoking the feelings of flight and soaring high above the land.

The quote heard in the Xylophone several times, is playful and quirky, portraying some of the trickster idea. Measures 62-89 definitely represent the trickster idea even more, with sounds in the upper woodwinds also emulating raven calls. The clarinets contribute another trickster effect in measures 100 and 102. At the very end of the piece, you’ll see a text note in the Timpani and Percussion 1 part suggesting the use of large black umbrellas or jackets. These ideas are meant to imitate the look and sound of raven wings, starting slowly, gradually getting faster, then slowing again. Throughout my life, I have seen and heard ravens fly overhead many times, especially when spending time in the mountains, and the giant wingspan and loud “whoosh-whoosh” are imprinted in my mind.

Finally, the main reason for writing about ravens in order to honor Professor Beth Bronk pertains to a specific story at TLU. One year, a family of ravens moved into the courtyard outside the TLU School of Music. They stayed around for a very long time, and faculty and students would recount various encounters, some of which involved the ravens scattering their branches and twigs or tapping on the windows late at night. While it is unknown if these particular birds will keep coming back year after year, they have made a lasting impact in the hearts and minds of the people who knew them.

- Program note provided by the composer`,
    conductor: "Anna Bush",
    directorNotes: `Texas is home to so many great band programs and educators, so it shouldn’t come as a surprise that we also have a good number of composers who are writing wonderful new works for band. I was born and raised in Texas, so featuring a work by one of our awesome Texas composers was a must. Upon invitation, we immediately began looking into some of Carol Brittin Chambers’ newer works, and this one went to the top of our list. We liked it so much that we actually programmed it for our Symphonic Band (3rd ensemble) for the Spring Concert last year! This was also a unique way to include our other bands in the magic of Midwest. Our Symphonic Band students felt special knowing Flight of the Ravens was one that the Honor Band would be showcasing at our concert.

    Carol lives a few hours away in San Antonio, so we were excited about the prospect of a clinic with her, and thankfully, we were able to work it out! Our time together was memorable, and I know our students enjoyed this experience very much.
    
    Thank you, Carol!`,
  },
  {
    panelId: "panel5",
    title: "Lyric for Strings",
    composer: "George Theophilus Walker/Cheldon R. Williams",
    publisher: "Murphy Music Press",
    year: "2024",
    grade: "4",
    time: "6:20",
    details: `George Walker (1922 - 2018), a pioneering, Pulitzer Prize- winning figure in American classical music, left an indelible mark with his profound compositions and achievements. Lyric for Strings stands as a poignant testament to Walker's mastery of expression and emotional depth. Originally conceived as a movement within a larger string quartet during his undergraduate years at the Curtis Institute of Music, this piece underwent a transformative journey before
emerging as a standalone work. 

Originally titled "Lament," likely because of the composition's personal nature and homage to his grandmother, this tender piece was an extraction from a string quartet. Before its first professional performance,	Walker renamed the piece "Adagio;" however, he ultimately	settled on the evocative title Lyric for Strings before its publication. 

- Program note provided by the publisher`,
    directorNotes: (
      <p>
        In April 2024, I happened upon Dr. Cheldon Williams’ Facebook post
        announcing that the second work of his Rediscovery Series,{" "}
        <u>Lyric for Strings</u>, was complete. This project followed Williams’
        beautiful transcription of Florence Price’s <u>Adoration</u>. Having
        recently received our invitation to perform at Midwest, I had my eye out
        for new projects, so this definitely piqued my interest. As a trombone
        player, I was familiar with the brilliance of Walker’s music, having
        worked on his <u>Concerto for Trombone</u> on numerous occasions. I was
        not familiar with <u>Lyric for Strings</u> but immediately became
        enthralled with the idea of programming this transcription based on the
        beauty of Walker’s original setting for string orchestra. Williams’ wind
        version is gorgeously crafted and provides so many wonderful
        opportunities for expansive musicianship and unique ensemble challenges.
        The percussion additions within the transcription were not only
        tasteful, the artistic use of these colors was also masterfully
        executed.
      </p>
    ),
  },
  {
    panelId: "panel6",
    title: "Kvetchers",
    composer: "Laura Estes",
    publisher: "Excelcia Music Publishing",
    year: "2020",
    grade: "2",
    time: "2:26",
    details: `Who doesn’t have family members that love to complain or argue about something? In the Yiddish language, ‘kvetch’ means to complain, hence this piece was composed to playfully introduce young band students to several key concepts in the form of witty musical ‘complaints’ and ‘surprises’. From the trumpets’ initial childhood taunt of ‘Nana Nana Boo Boo’ to the percussion’s response of ‘Boo Boo Nana Nana’, every instrument section is in on the joke! Surprises include some one-note solos, a meter change to 6/8 and back, and a 3/4 measure out of nowhere. Complaints include ever-changing instrumental colors and groupings where everyone puts in their ‘two cents’ throughout the piece, culminating in an exciting eighth-note ‘Nana Nana’ final argument, after which all the instruments ‘make up’ in the last measure.

Kvetchers is a mischievous musical argument in the form of a non-traditional concert march. Every section is featured in some fashion, and the percussionists will especially enjoy their role in the fun with two separate mallet parts, lots of ‘toys’, and a challenging snare part. Concepts to be introduced or reinforced for young players include part independence, use of chromatic versus diatonic notation in consecutive 4-note passages, Trombone glissandi, muted Trumpet, one easy time and meter change, trills, off-beats, shifting slurs, accidentals, and just a hint of 16th notes.

Kvetchers (Surprises in Controversial Time) has a ‘little something special’ for every instrument in the band and is sure to please even the most ardent of kvetchers. Enjoy!

- Program note provided by the composer`,
    conductor: "Caitlin Wolf",
    directorNotes: (
      <>
        This is the second time <u>Kvetchers</u> has been performed at Midwest.
        Stiles Middle School, a Rouse program feeder, performed the work in 2021
        after not being able to perform in 2020. This light and quirky work is
        so fun and super engaging for groups of all ages, and it serves to bring
        a smile or even a laugh or two after the pensiveness of the Walker. This
        performance is dedicated to our Stiles Middle School seniors who should
        have performed at Midwest in 2020 but are finally getting the
        opportunity to do so today!
        <br />
        <br />
        Interesting aside #1: It wasn’t until Viet Cuong’s visit to Texas in
        November to work with us on our commission, <u>Evergreen</u>, that I
        learned that the composer of <u>Kvetchers</u>, Laura Estes, was his band
        director in seventh grade. Viet had started band at a different school
        in sixth grade, and when he moved to his new school he had determined
        that band wasn’t for him and had no plans to try it at his new school.
        When he went to sign up for classes, his dad convinced him to try it at
        the new school. Viet went on to speak so fondly of his experience in
        Mrs. Estes’ band which he believes was a major catalyst to his early
        enthusiasm and also the impetus for the artistic path he’s on today.
      </>
    ),
  },
  {
    panelId: "panel7",
    title: "Evergreen",
    composer: "Viet Cuong",
    publisher: "Manuscript",
    grade: "5",
    time: "5:50",
    imgSrc: EvergreenPicture,
    details: `From Viet Cuong:

    A few years ago, I wrote a piece called Deciduous, born from a period of loss following my father’s passing. His absence left a deep void, and for a time, my creativity struggled under the weight of that pain. He was the first close family member I had lost, and it felt natural, even inevitable, to dwell on all that was missing. But in the years since, as I have cycled through ups and downs of healing, certain constants in my life have helped me find strength and meaning again—especially the people closest to me and, of course, music.

When I reflect on the journey through those difficult years, I find myself feeling more and more grateful for these enduring sources of support. Evergreen is a wistful yet exuberant tribute to these constants in our lives, the steadfast forces from which we draw love, energy, and resilience. In this sense, it serves as a companion piece—or perhaps a foil—to Deciduous. While loss may lead us to initially fixate on what is gone, remembering what remains—what has always been there, and what will continue to be—helps us move forward.

Evergreen was commissioned by the Rouse High School Honor Band and their Director Ryan Johnstone for their 2024 Midwest Clinic Performance. Deepest thanks to all involved in this commission, and congratulations to Ryan Johnstone and the Rouse High School Honor Band for their invitation to Midwest.

- Program note provided by the composer`,
    directorNotes: (
      <>
        The exhilaration of performing any new work is something all musicians
        look forward to. Having the opportunity to collaborate with THE Viet
        Cuong was “next level” for directors and students alike. We were so
        fortunate to enjoy his company and guidance throughout the process but
        were especially appreciative of his visit to Texas in November where he
        was present for the official premiere of <u>Evergreen</u> after several
        days of residency.
        <br />
        <br />
        Prior to receiving Viet’s notes about the piece, I inquired with him
        about the opportunity for one of our multi talented students, Charlotte
        Chen, to interact with his music via visual art. Viet loved this idea
        and Charlotte agreed to create something inspired by Evergreen.
        Additionally, it was decided that her work would be the cover art for
        the piece upon publication.
        <br />
        <br />
        Charlotte created a digital art piece in the style of WPA artwork. Below
        is her artist’s statement and work:
        <br />
        <br />
        “My main inspiration for the style of this artwork was artworks of
        national parks: they have a distinct style that can convey fine details
        but upon closer look, they are seemingly "messy" strokes. The main
        subject of the artwork is an abandoned steam train submerged in a lake,
        which symbolizes one's losses and grief. However, as "Evergreen"
        entails, there are always constants in life that help us heal. This
        "constant" is represented by nature as it is always there no matter what
        we put it through and its tendency to grow back and recover over time.
        Finally, a stork stands on top of the train in the light, symbolizing
        new beginnings and looking forward.”
      </>
    ),
    soloist: `Commissioned by the 
    Rouse High School Honor Band
    Ryan Johnstone, Director`,
  },
  {
    panelId: "panel8",
    title: "Serengeti Dreams",
    composer: "Robert W. Smith",
    publisher: "Belwin",
    year: "2000",
    grade: "1",
    time: "3:07",
    conductor: "Cynthia A. Lansford",
    details: `The title for the piece is derived from Serengeti National Park, a wildlife refuge in northern Tanzania, East Africa. The park was established in 1951 and extends east and southeast from the shores of Lake Victoria. Serengeti has an area of about 14,763 sq km (5,700 sq mi). Its hills and grassland ranges provide habitat to elephants, black rhinoceroses, lions, leopards, cheetahs, gazelles, wildebeests, hyenas, buffalo, zebras, giraffes, and antelope. The park is the only place in Africa where vast animal migrations, especially in May and June, can still be seen.

Susan Smith, the composer’s wife, also remarked “Robert was inspired by his research and work on Africa Ceremony and Song to create more multicultural  works for younger students to expose them to the music of the world and to expand percussion experiences. Robert had a knack for writing engaging pieces that encouraged and motivated students to stay engaged in music. 

- Program note provided by the publisher`,
    directorNotes: (
      <>
        After completing graduate school as a performance major, you may be
        surprised to learn that I was in search of gainful employment (ha!). The
        absence of vacancies at any “big gigs” meant it was time to move back to
        Texas, find a teaching position, and practice all the other hours of the
        day in hopes that one of those highly coveted positions would come open
        soon.
        <br />
        <br />
        When I returned to Texas, the small community of Eustace (current
        population 1,157) gave me the opportunity of a lifetime, although I
        didn’t necessarily think so at the time. Moving from a conservatory
        environment performing the great standards of the orchestral fair to
        standing before a room full of small-town Texas kids who just wanted to
        learn how to play the soundtrack to “The Incredibles” may have been the
        most opposite ends of the musical spectrum imaginable.
        <br />
        <br />
        Fast forward a few months, and I had soon found a new performance
        passion, and that was teaching! Before I could blink, it had been 10
        years, and now in year 19, I can say there are zero regrets! I’d say
        most days at Rouse are a great reminder that our unique story doesn’t
        always work out the way we may have imagined it and oftentimes, and most
        certainly in my case, it’s better than I could have ever dreamed!
        <br />
        <br />
        <u>Serengeti Dreams</u> was the first festival piece I taught at that
        humble little program in Eustace, Texas. Thank you, Mr. Smith, for being
        part of the flame that ignited this career that I love!
        <br />
        <br />
        Our performance of <u>Serengeti Dreams</u> is in honor of Robert W.
        Smith for his profound and extensive contributions to band literature
        and music education.
      </>
    ),
  },
  {
    panelId: "panel9",
    title: "Penny Lane",
    composer: "Paul McCartney & John Lennon/Chris Dedrick & Chris Coletti",
    publisher: "Canadian Brass Publications/Hal Leonard",
    year: "2024",
    grade: "3/5",
    time: "4:00",
    details: `"Penny Lane" is a song by the English rock band, The Beatles, that was released as a double A-side single with "Strawberry Fields Forever" in February 1967. It was written primarily by Paul McCartney and credited to the Lennon–McCartney songwriting partnership. The lyrics refer to Penny Lane, a street in Liverpool, and make mention of the sights and characters that McCartney recalled from his upbringing in the city.

    The Beatles began recording "Penny Lane" in December 1966, intending it as a song for their album Sgt. Pepper's Lonely Hearts Club Band. Instead, after it was issued as a single to satisfy record company demand for a new release, the band adhered to their policy of omitting previously released singles from their albums. The song features numerous modulations that occur mid-verse and between its choruses. Session musician David Mason played a piccolo trumpet solo for its bridge section.

    "Penny Lane" was a top-five hit across Europe and topped the US Billboard Hot 100. In Britain, it was the first Beatles single since "Please Please Me" in 1963 to fail to reach number 1 on the Record Retailer chart. In November 1967, "Penny Lane" was included on the US Magical Mystery Tour album. In 2021, Rolling Stone ranked the track at number 280 on its list of the "500 Greatest Songs of All Time". In 2006, Mojo ranked the song at number 9 of "The 101 Greatest Beatles Songs".

    In 2011, the song was inducted into the Grammy Hall of Fame.

    - Program note from Wikipedia

    The Canadian Brass' iconic rendition of Lennon & McCartney's “Penny Lane” has become a must-play arrangement for brass quintet featuring solo piccolo trumpet. This Chris Dedrick arrangement has now been further adapted by Chris Coletti for two solo trumpets and wind ensemble. 

    -Program note from Chuck Daellenbach, Canadian Brass`,
    directorNotes: `When Aledo Middle School Honor Winds came to perform at Midwest in 2013, we had the wonderful opportunity to partner with Victoria Luperi (formerly Principal Clarinet of the Fort Worth Symphony and current Associate Principal Clarinet / Principal E-flat Clarinet of the Pittsburgh Symphony). After that experience, I knew that if I ever had the fortune of having another ensemble perform at Midwest, a guest artist was a must! Seeing the look of amazement in your students upon them hearing such beauty and artistry is priceless. 

Our experience with Caleb Hudson has been equally as inspiring, and it has been an absolute delight to collaborate with him on this arrangement of a classic. I had the idea of asking Caleb to perform with us after watching a YouTube performance of him performing this same arrangement with the University of Texas Wind Ensemble (Prof. Jerry Junkin, conducting). We would like to offer our special thanks to Canadian Brass Publications and Hal-Leonard for formally publishing this work to allow for our performance today!
`,
    soloist: "Caleb Hudson, piccolo trumpet",
  },
  {
    panelId: "panel10",
    title: "The Pines of Rome: IV. Pines of the Appian Way",
    composer: "Ottorino Respighi/Guy M. Duker",
    publisher: "Ricordi/Hal Leonard",
    year: "1974",
    grade: "6",
    time: "20:15 (5:15)",
    details: `The Pines of Rome is Respighi's most notable and durably popular composition, and this transcription for band by Guy Duker has long been considered a staple in the literature. With its specific musical imagery and brilliant scoring, this is truly a magnificent and rewarding work for mature bands.

    - Program note from publisher

    The final section of the Pines of Rome is titled Pines of the Appian Way. Respighi gives the following colorful description of an ancient Roman army on the march: “Misty Dawn on the Appian Way. Solitary pines stand guard over the tragic countryside. We hear the faint unceasing rhythm of numberless steps. A vision of ancient glories appears to the poet, trumpets blare and a consular army erupts in the brilliance of the newly risen sun — towards the Sacred Way, mounting to a triumph on the Capitoline Hill.” The movement opens quietly, with a slow and inexorable march, but builds gradually towards an enormous brassy peak (with several brassy knolls along the way...). To create this picture of Roman military might, Respighi’s score calls for six bucinae—Roman war trumpets. He also provides the helpful suggestion that modern trumpets may be used if bucinae are not available!

    - Program note by William V. Johnson for the San Luis Obispo Wind Orchestra concert program, 15 May 2010`,
    directorNotes: `This Respighi has always been a favorite of mine, and the nostalgia runs deep since it was one of my earliest experiences performing in a full orchestra while I was a member of the Greater Dallas Youth Orchestra. I typically program at least one transcription per year just so our students are exposed to some of the great masterworks! The challenge of pulling out details within the orchestration to create textures that typically only full orchestras can achieve is also something I enjoy, although I’m not sure this movement from Respighi gives us ample opportunity to explore those typical intricacies because of all that BRASS!

Interesting aside #2: Viet was completely unaware that we had programmed the Respighi, so imagine the wonderment of receiving his piece Evergreen. We both chose to interpret this peculiarity as fate rather than coincidence.

The Leander area is home to several community, semi-professional, and professional ensembles. These groups enrich our local culture and also provide inspiration for our students and area band directors through their frequent concerts and youth programs. We tapped into these resources to create our banda roster. A special thanks goes to trumpets, Casey Martin (Cedar Park Winds, Austin Brass Collective), Marc Sutton (Austin Brass Collective), Jorge Rivera (Cedar Park Winds), Caleb Hudson (University of Texas Trumpet Professor) and trombones, Mike Dorato (Austin Brass Collective) and Adrian Teti (Cedar Park Winds, Austin Brass Collective) for being our guests on this epic and triumphant conclusion to our concert!
`,
  },
];
