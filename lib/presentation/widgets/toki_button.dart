import 'package:flutter/material.dart';
import 'package:toki/presentation/responsiveness.dart';

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
      child: child,
      decoration: BoxDecoration(
        gradient: gradient,
        borderRadius: isFullWidth
            ? BorderRadius.circular(getResponsiveWidth(36))
            : BorderRadius.zero,
      ),
    );
  }
}




// class TokiTextButton extends StatelessWidget {
//   final Function() onPressed;
//   final String label;
//   const TokiTextButton({
//     super.key,
//     required this.label,
//     required this.onPressed,
//   });

//   @override
//   Widget build(BuildContext context) {
//     return TokiButton(
//       onPressed: onPressed,
//       child: Text(label),
//     );
//   }
// }

// class TokiIconButton extends StatelessWidget {
//   final Function() onPressed;
//   final IconData icon;
//   const TokiIconButton(
//       {super.key, required this.icon, required this.onPressed});

//   @override
//   Widget build(BuildContext context) {
//     return TokiButton(onPressed: onPressed, child: Icon(icon));
//   }
// }
