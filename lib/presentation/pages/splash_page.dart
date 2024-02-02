import 'package:flutter/material.dart';
import 'package:toki/presentation/responsiveness.dart';
import 'package:toki/presentation/widgets/onboarding/character_group.dart';

class SplashPage extends StatelessWidget {

  const SplashPage({super.key});

  @override
  Widget build(BuildContext context) {
    Responsiveness.init(context);
    return Scaffold(
      body: Column(children: [
        CharacterGroup(),
      ]),
    );
  }
}
