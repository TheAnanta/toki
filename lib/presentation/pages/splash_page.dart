import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:localization/localization.dart';
import 'package:toki/presentation/responsiveness.dart';
import 'package:toki/presentation/widgets/onboarding/character_group.dart';
import 'package:toki/presentation/widgets/toki_elevated_button.dart';

class SplashPage extends StatelessWidget {
  const SplashPage({super.key});

  @override
  Widget build(BuildContext context) {
    Responsiveness.init(context);
    return Scaffold(
      body: Stack(children: [
        //
        Image.asset(
          'assets/images/bg.png',
          fit: BoxFit.cover,
          height: double.infinity,
          alignment: const Alignment(0.38, 0.5),
        ),

        SizedBox(
          width: double.infinity,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              SvgPicture.asset('assets/icons/tokilogo.svg'),
              const CharacterGroup(),
              SplashPageCTA(
                onLogin: () {
                  Navigator.pushNamed(context, '/login');
                },
                onStart: () {
                  Navigator.pushNamed(context, '/onboarding');
                },
              ),
            ],
          ),
        ),
      ]),
    );
  }
}

class SplashPageCTA extends StatelessWidget {
  final Function() onLogin;
  final Function() onStart;

  const SplashPageCTA({
    super.key,
    required this.onLogin,
    required this.onStart,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        TokiElevatedButton(
          onPressed: () {
            onLogin();
          },
          gradient: const LinearGradient(
            colors: [
              Color(0xFFFFF278),
              Color(0xFFFFEE5E),
            ],
          ),
          shadowGradient: const LinearGradient(
            colors: [
              Color(0xFFFFDF33),
              Color(0xFFFFD720),
            ],
          ),
          labelColor: const Color(0xFFDC9346),
          label: 'login'.i18n(),
        ),
        TokiElevatedButton(
          onPressed: () {
            onStart();
          },
          gradient: const LinearGradient(
            colors: [
              Color(0xFF00C1FF),
              Color(0xFF00B1FF),
            ],
          ),
          shadowGradient: const LinearGradient(
            colors: [
              Color(0xFF08B1EF),
              Color(0xFF1E86F9),
            ],
          ),
          label: 'start'.i18n(),
        )
      ],
    );
  }
}
