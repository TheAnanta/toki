import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_svg/svg.dart';
import 'package:localization/localization.dart';
import 'package:toki/presentation/pages/onboarding_page.dart';
import 'package:toki/presentation/pages/responsiveness_page_wrapper.dart';
import 'package:toki/presentation/pages/splash_page.dart';
import 'package:toki/presentation/responsiveness.dart';
import 'package:toki/presentation/widgets/toki_button.dart';

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
        "/login": (context) => const LoginPage(),
        '/home': (context) => const MyHomePage(title: 'Toki'),
      },
    );
  }
}

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return ResponsivePageWrapper(
      child: LayoutBuilder(builder: (context, constraints) {
        Responsiveness.init(
            context, constraints.maxWidth, constraints.maxHeight);
        return Scaffold(
          body: Stack(
            children: [
              Positioned(
                left: 0,
                right: 0,
                bottom: 0,
                child: Container(
                  width: double.infinity,
                  height: getResponsiveHeight(696),
                  color: Color(0x20FFF9BF),
                ),
              ),
              Positioned(
                child: SvgPicture.asset("assets/images/characters/sloth.svg"),
                top: getResponsiveHeight(-40),
                left: getResponsiveWidth(-40),
                width: getResponsiveWidth(450),
              ),
              SizedBox(
                width: double.infinity,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    SizedBox(
                      height: getResponsiveHeight(391),
                    ),
                    Expanded(
                        child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: Column(
                        children: [
                          Text(
                            "login".i18n(),
                            textAlign: TextAlign.center,
                            style: Theme.of(context)
                                .textTheme
                                .bodyMedium
                                ?.copyWith(
                                  color: const Color(0xFFDC9346),
                                  fontSize: getResponsiveHeight(24),
                                  fontWeight: FontWeight.w500,
                                ),
                          ),
                          Text(
                            "username-password-continue".i18n(),
                            textAlign: TextAlign.center,
                          ),
                          Spacer(),
                          TextField(
                            decoration: InputDecoration(
                                fillColor: Color(0xFF20A2C1C4),
                                filled: true,
                                hintText: "Username"),
                          ),
                          SizedBox(
                            height: getResponsiveHeight(24),
                          ),
                          TextField(
                            decoration: InputDecoration(
                                fillColor: Color(0xFF20A2C1C4),
                                filled: true,
                                hintText: "Password"),
                          ),
                          Spacer(),
                        ],
                      ),
                    )),
                    Row(children: [
                      Expanded(
                        child: TokiIconButton(
                          icon: Icons.chevron_left_rounded,
                          onPressed: () {
                            Navigator.of(context).pop();
                          },
                          color: Colors.white,
                          iconColor: const Color(0xFF97B0CF),
                          shadow: BoxShadow(
                            color: const Color(0xFF000000).withOpacity(0.05),
                            offset: Offset(
                              0,
                              getResponsiveHeight(4),
                            ),
                            blurRadius: getResponsiveHeight(8),
                            spreadRadius: getResponsiveWidth(3),
                          ),
                        ),
                      ),
                      SizedBox(
                        width: getResponsiveWidth(24),
                      ),
                      Expanded(
                        flex: 3,
                        child: TokiTextButton(
                          label: "Next",
                          onPressed: () {
                            Navigator.of(context).pushNamed("/home");
                          },
                          gradient: const LinearGradient(
                            colors: [
                              Color(0xFFFFDF33),
                              Color(0xFFFFBE2E),
                            ],
                          ),
                        ),
                      ),
                    ]),
                  ],
                ),
              ),
            ],
          ),
        );
      }),
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
    return ResponsivePageWrapper(
      child: LayoutBuilder(
        builder: (context, constraints) {
          Responsiveness.init(
              context, constraints.maxWidth, constraints.maxHeight);
          return Scaffold(
              body: SizedBox(
            width: double.infinity,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "What would you like to learn today",
                ),
                SizedBox(
                  height: getResponsiveHeight(24),
                ),
                InkWell(
                  onTap: () {
                    Navigator.of(context)
                        .push(MaterialPageRoute(builder: (context) {
                      return QuizScreen(
                        isFrontEnd: true,
                      );
                    }));
                  },
                  child: Container(
                    decoration: BoxDecoration(
                        color: Color(0xFFA7BF01), shape: BoxShape.circle),
                    height: getResponsiveHeight(144),
                    width: getResponsiveHeight(144),
                    child: Center(child: Text("Frontend")),
                  ),
                ),
                SizedBox(
                  height: getResponsiveHeight(24),
                ),
                InkWell(
                  onTap: () {
                    Navigator.of(context)
                        .push(MaterialPageRoute(builder: (context) {
                      return QuizScreen(
                        isFrontEnd: false,
                      );
                    }));
                  },
                  child: Container(
                    decoration: BoxDecoration(
                        color: Color(0xFFBE8FFE), shape: BoxShape.circle),
                    height: getResponsiveHeight(144),
                    width: getResponsiveHeight(144),
                    child: Center(child: Text("Backend")),
                  ),
                ),
              ],
            ),
          ));
        },
      ),
    );
  }
}

class QuizScreen extends StatelessWidget {
  final bool isFrontEnd;
  const QuizScreen({super.key, required this.isFrontEnd});

  @override
  Widget build(BuildContext context) {
    return ResponsivePageWrapper(
      child: LayoutBuilder(
        builder: (context, constraints) {
          Responsiveness.init(
              context, constraints.maxWidth, constraints.maxHeight);
          return Scaffold(
              body: SizedBox(
            width: double.infinity,
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Row(
                    children: [
                      Icon(Icons.favorite),
                      Text("3"),
                      Spacer(),
                      Icon(Icons.star),
                      Text("24"),
                    ],
                  ),
                  SizedBox(
                    height: 24,
                  ),
                  Text(isFrontEnd
                      ? "Noah is styling his web page and wants to ensure consistent spacing between elements. Which CSS property should he use to define the space between the content and border of an element?"
                      : "Alex is building a RESTful API for his web application to interact with the database. Which HTTP method is typically used for retrieving resource representations?"),
                  SizedBox(
                    height: 16,
                  ),
                  TokiTextButton(
                    label: isFrontEnd ? "A) Margin" : "A) POST",
                    onPressed: () {},
                    color: Colors.blue.shade500,
                  ),
                  SizedBox(
                    height: 12,
                  ),
                  TokiTextButton(
                    label: isFrontEnd ? "B) Padding" : "B) GET",
                    onPressed: () {},
                    color: Colors.blue.shade500,
                  ),
                  SizedBox(
                    height: 12,
                  ),
                  TokiTextButton(
                    label: isFrontEnd ? "C) Border" : "C) PUT",
                    onPressed: () {},
                    color: Colors.blue.shade500,
                  ),
                  SizedBox(
                    height: 12,
                  ),
                  TokiTextButton(
                    label: isFrontEnd ? "D) Float" : "D) DELETE",
                    onPressed: () {},
                    color: Colors.blue.shade500,
                  ),
                ],
              ),
            ),
          ));
        },
      ),
    );
  }
}
