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
          alignment: Alignment(0.38, 0.5),
        ),

        SizedBox(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SvgPicture.asset('assets/icons/tokilogo.svg'),
              CharacterGroup(),
              Row(
                children: [
                  TokiElevatedButton(
                    gradient: LinearGradient(
                      colors: [
                        Color(0xFFFFF278),
                        Color(0xFFFFEE5E),
                      ],
                    ),
                    shadowGradient: LinearGradient(
                      colors: [
                        Color(0xFFFFDF33),
                        Color(0xFFFFD720),
                      ],
                    ),
                    labelColor: Color(0xFFDC9346),
                    label: 'login'.i18n(),
                  ),
                  TokiElevatedButton(
                    gradient: LinearGradient(
                      colors: [
                        Color(0xFF00C1FF),
                        Color(0xFF00B1FF),
                      ],
                    ),
                    shadowGradient: LinearGradient(
                      colors: [
                        Color(0xFF08B1EF),
                        Color(0xFF1E86F9),
                      ],
                    ),
                  )
                ],
              ),
            ],
          ),
          width: double.infinity,
        ),
      ]),
    );
  }
}
