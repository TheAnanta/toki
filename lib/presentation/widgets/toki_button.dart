import 'package:flutter/material.dart';

class TokiButton extends StatelessWidget {
  final Function() onPressed;
  final Widget child;
  final Color color;
  const TokiButton({
    super.key,
    required this.child,
    required this.onPressed,
    this.color = Colors.black,
  });

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      onPressed: onPressed,
      child: child,
      color: color,
    );
  }
}

class TokiTextButton extends StatelessWidget {
  final Function() onPressed;
  final String label;
  const TokiTextButton({
    super.key,
    required this.label,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return TokiButton(
      onPressed: onPressed,
      child: Text(label),
    );
  }
}

class TokiIconButton extends StatelessWidget {
  final Function() onPressed;
  final IconData icon;
  const TokiIconButton(
      {super.key, required this.icon, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return TokiButton(onPressed: onPressed, child: Icon(icon));
  }
}
