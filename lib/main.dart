import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:localization/localization.dart';
import 'package:toki/presentation/pages/onboarding_page.dart';
import 'package:toki/presentation/pages/splash_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    LocalJsonLocalization.delegate.directories = ['lib/i18n'];
    return MaterialApp(
      supportedLocales: [
        Locale('en', 'US'),
        Locale('hi', 'IN'),
        Locale("te", "IN"),
        Locale("kn", "IN"),
        Locale("ta", "IN"),
        Locale("sa", "IN"),
        Locale("ml", "IN"),
      ],
      localizationsDelegates: [
        // delegate from localization package.
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        //json-file
        LocalJsonLocalization.delegate,
      ],
      // locale: Locale("kn", "IN"),
      title: 'Flutter Demo',
      theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
          fontFamily: 'GothamSSm'),
      initialRoute: '/',
      routes: {
        '/': (context) => const SplashPage(),
        "/onboarding": (context) => const OnboardingPage(),
        "/login": (context) => const Placeholder(),
        '/home': (context) => const MyHomePage(title: 'Toki'),
      },
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[],
        ),
      ),
    );
  }
}
