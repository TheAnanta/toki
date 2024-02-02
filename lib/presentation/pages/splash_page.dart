import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:toki/presentation/responsiveness.dart';
import 'package:toki/presentation/widgets/onboarding/character_group.dart';
import 'package:toki/presentation/widgets/toki_button.dart';

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
              TokiElevatedButton(),
            ],
          ),
          width: double.infinity,
        ),
      ]),
    );
  }
}
