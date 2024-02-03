import 'dart:math';

import 'package:flutter/material.dart';
import 'package:toki/presentation/responsiveness.dart';
import 'package:toki/utils/linear_gradient_extension.dart';

class TokiButton extends StatelessWidget {
  final Function() onPressed;
  final Widget child;
  final LinearGradient gradient;
  final bool isFullWidth;
  const TokiButton({
    super.key,
    required this.child,
    required this.onPressed,
    required this.gradient,
    this.isFullWidth = false,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: gradient,
        borderRadius: isFullWidth
            ? BorderRadius.circular(getResponsiveWidth(36))
            : BorderRadius.zero,
      ),
      child: child,
    );
  }
}

class TokiTextButton extends StatelessWidget {
  final Function() onPressed;
  final String label;
  final LinearGradient gradient;
  const TokiTextButton({
    super.key,
    required this.label,
    required this.onPressed,
    required this.gradient,
  });

  @override
  Widget build(BuildContext context) {
    return TokiButton(
      onPressed: onPressed,
      child: Text(label),
      gradient: gradient,
    );
  }
}

class TokiIconButton extends StatelessWidget {
  final Function() onPressed;
  final IconData icon;
  final LinearGradient gradient;
  const TokiIconButton(
      {super.key,
      required this.icon,
      required this.onPressed,
      required this.gradient});

  @override
  Widget build(BuildContext context) {
    return TokiButton(
        onPressed: onPressed, child: Icon(icon), gradient: gradient);
  }
}
