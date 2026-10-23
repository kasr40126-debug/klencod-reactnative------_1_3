
import 'package:flutter/material.dart';

void main() => runApp(const MuslimApp());

const Color green = Color(0xFF087F5B);
const Color gold = Color(0xFFE3BD69);
const Color background = Color(0xFFF6F8F5);

class MuslimApp extends StatelessWidget {
  const MuslimApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'موسوعة المسلم الشاملة',
      theme: ThemeData(
        useMaterial3: true,
        scaffoldBackgroundColor: background,
        colorScheme: ColorScheme.fromSeed(seedColor: green),
        fontFamily: 'Roboto',
        appBarTheme: const AppBarTheme(
          backgroundColor: green,
          foregroundColor: Colors.white,
          centerTitle: true,
        ),
      ),
      home: const MainPage(),
    );
  }
}

class ReadingItem {
  final String title;
  final String text;
  final String category;
  final int count;
  const ReadingItem(this.title, this.text, this.category, {this.count = 1});
}

const List<ReadingItem> adhkar = [
  ReadingItem('أذكار الصباح', 'أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.', 'الصباح'),
  ReadingItem('أذكار الصباح', 'اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.', 'الصباح'),
  ReadingItem('أذكار الصباح', 'رضيت بالله رباً، وبالإسلام ديناً، وبمحمد صلى الله عليه وسلم نبياً.', 'الصباح', count: 3),
  ReadingItem('أذكار الصباح', 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.', 'الصباح', count: 7),
  ReadingItem('أذكار المساء', 'أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.', 'المساء'),
  ReadingItem('أذكار المساء', 'اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير.', 'المساء'),
  ReadingItem('أذكار المساء', 'رضيت بالله رباً، وبالإسلام ديناً، وبمحمد صلى الله عليه وسلم نبياً.', 'المساء', count: 3),
  ReadingItem('بعد الصلاة', 'أستغفر الله، أستغفر الله، أستغفر الله.', 'بعد الصلاة'),
  ReadingItem('بعد الصلاة', 'اللهم أنت السلام ومنك السلام، تباركت يا ذا الجلال والإكرام.', 'بعد الصلاة'),
  ReadingItem('بعد الصلاة', 'سبحان الله', 'بعد الصلاة', count: 33),
  ReadingItem('بعد الصلاة', 'الحمد لله', 'بعد الصلاة', count: 33),
  ReadingItem('بعد الصلاة', 'الله أكبر', 'بعد الصلاة', count: 34),
  ReadingItem('النوم', 'باسمك اللهم أموت وأحيا.', 'النوم'),
  ReadingItem('النوم', 'اللهم قني عذابك يوم تبعث عبادك.', 'النوم', count: 3),
  ReadingItem('الاستيقاظ', 'الحمد لله الذي أحيانا بعدما أماتنا وإليه النشور.', 'الاستيقاظ'),
];

const List<ReadingItem> duas = [
  ReadingItem('دخول الخلاء', 'اللهم إني أعوذ بك من الخبث والخبائث.', 'أدعية يومية'),
  ReadingItem('الخروج من الخلاء', 'غفرانك.', 'أدعية يومية'),
  ReadingItem('قبل الطعام', 'بسم الله.', 'الطعام'),
  ReadingItem('إذا نسي التسمية', 'بسم الله أوله وآخره.', 'الطعام'),
  ReadingItem('بعد الطعام', 'الحمد لله الذي أطعمني هذا ورزقنيه من غير حول مني ولا قوة.', 'الطعام'),
  ReadingItem('لبس الثوب', 'الحمد لله الذي كساني هذا ورزقنيه من غير حول مني ولا قوة.', 'اللباس'),
  ReadingItem('دخول المنزل', 'بسم الله ولجنا، وبسم الله خرجنا، وعلى ربنا توكلنا.', 'المنزل'),
  ReadingItem('الخروج من المنزل', 'بسم الله، توكلت على الله، ولا حول ولا قوة إلا بالله.', 'المنزل'),
  ReadingItem('ركوب السيارة أو السفر', 'سبحان الذي سخر لنا هذا وما كنا له مقرنين، وإنا إلى ربنا لمنقلبون.', 'السفر'),
  ReadingItem('دعاء السفر', 'الله أكبر، الله أكبر، الله أكبر، سبحان الذي سخر لنا هذا وما كنا له مقرنين، وإنا إلى ربنا لمنقلبون. اللهم إنا نسألك في سفرنا هذا البر والتقوى، ومن العمل ما ترضى.', 'السفر'),
  ReadingItem('دخول المسجد', 'اللهم افتح لي أبواب رحمتك.', 'المسجد'),
  ReadingItem('الخروج من المسجد', 'اللهم إني أسألك من فضلك.', 'المسجد'),
  ReadingItem('عند الغضب', 'أعوذ بالله من الشيطان الرجيم.', 'أدعية متنوعة'),
  ReadingItem('دعاء الكرب', 'لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم، لا إله إلا الله رب السماوات ورب الأرض ورب العرش الكريم.', 'أدعية متنوعة'),
  ReadingItem('طلب الشفاء', 'اللهم رب الناس، أذهب البأس، اشف أنت الشافي، لا شفاء إلا شفاؤك، شفاء لا يغادر سقماً.', 'أدعية متنوعة'),
  ReadingItem('الاستغفار', 'أستغفر الله العظيم وأتوب إليه.', 'أدعية متنوعة'),
  ReadingItem('سيد الاستغفار', 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء بذنبي فاغفر لي، فإنه لا يغفر الذنوب إلا أنت.', 'أدعية متنوعة'),
  ReadingItem('دعاء للوالدين', 'رب اغفر لي ولوالدي وللمؤمنين يوم يقوم الحساب.', 'أدعية متنوعة'),
  ReadingItem('دعاء الرزق', 'اللهم اكفني بحلالك عن حرامك، وأغنني بفضلك عمن سواك.', 'أدعية متنوعة'),
  ReadingItem('دعاء التوبة', 'ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين.', 'أدعية متنوعة'),
  ReadingItem('دعاء العلم', 'رب زدني علماً.', 'أدعية متنوعة'),
  ReadingItem('دعاء دخول السوق', 'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، يحيي ويميت وهو حي لا يموت، بيده الخير وهو على كل شيء قدير.', 'أدعية متنوعة'),
];

class MainPage extends StatefulWidget {
  const MainPage({super.key});
  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  int tab = 0;
  int tasbeeh = 0;
  int target = 33;
  String tasbeehText = 'سبحان الله';
  final Set<String> favorites = {};
  final Map<String, int> itemCounts = {};

  void showItem(ReadingItem item) {
    int count = itemCounts[item.title + item.text] ?? 0;
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      showDragHandle: true,
      builder: (ctx) => StatefulBuilder(builder: (ctx, setSheet) {
        return Padding(
          padding: const EdgeInsets.fromLTRB(22, 8, 22, 28),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(item.title, style: const TextStyle(fontSize: 23, fontWeight: FontWeight.bold, color: green)),
              const SizedBox(height: 18),
              SelectableText(item.text, textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 23, height: 1.9)),
              const SizedBox(height: 20),
              Text('عدد التكرار المقترح: ${item.count}', style: const TextStyle(color: Colors.black54)),
              const SizedBox(height: 12),
              Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                IconButton(
                  onPressed: () {
                    setState(() {
                      final key = item.title + item.text;
                      favorites.contains(key) ? favorites.remove(key) : favorites.add(key);
                    });
                    setSheet(() {});
                  },
                  icon: Icon(favorites.contains(item.title + item.text) ? Icons.favorite : Icons.favorite_border,
                      color: Colors.red, size: 30),
                ),
                const SizedBox(width: 18),
                FilledButton.icon(
                  onPressed: () {
                    count++;
                    itemCounts[item.title + item.text] = count;
                    setSheet(() {});
                  },
                  icon: const Icon(Icons.check),
                  label: Text('تم التكرار: $count'),
                ),
              ]),
            ],
          ),
        );
      }),
    );
  }

  @override
  Widget build(BuildContext context) {
    final pages = [
      _home(),
      _readingPage('الأذكار', adhkar, ['الكل', 'الصباح', 'المساء', 'بعد الصلاة', 'النوم', 'الاستيقاظ']),
      _readingPage('الأدعية', duas, ['الكل', 'أدعية يومية', 'الطعام', 'اللباس', 'المنزل', 'السفر', 'المسجد', 'أدعية متنوعة']),
      _tasbeehPage(),
      _prayerPage(),
      _favoritesPage(),
    ];
    return Scaffold(
      appBar: AppBar(
        title: const Text('موسوعة المسلم الشاملة', style: TextStyle(fontWeight: FontWeight.bold)),
      ),
      body: pages[tab],
      bottomNavigationBar: NavigationBar(
        selectedIndex: tab,
        onDestinationSelected: (i) => setState(() => tab = i),
        destinations: const [
          NavigationDestination(icon: Icon(Icons.home_outlined), selectedIcon: Icon(Icons.home), label: 'الرئيسية'),
          NavigationDestination(icon: Icon(Icons.auto_awesome_outlined), selectedIcon: Icon(Icons.auto_awesome), label: 'الأذكار'),
          NavigationDestination(icon: Icon(Icons.volunteer_activism_outlined), selectedIcon: Icon(Icons.volunteer_activism), label: 'الأدعية'),
          NavigationDestination(icon: Icon(Icons.fingerprint), label: 'التسبيح'),
          NavigationDestination(icon: Icon(Icons.mosque_outlined), label: 'الصلاة'),
          NavigationDestination(icon: Icon(Icons.favorite_outline), label: 'المفضلة'),
        ],
      ),
    );
  }