import 'package:flutter/material.dart';
import 'package:toki/presentation/responsiveness.dart';
import 'package:toki/utils/linear_gradient_extension.dart';

class TokiElevatedButton extends StatefulWidget {
  final LinearGradient gradient;
  final LinearGradient shadowGradient;
  final String label;
  final Color labelColor;
  const TokiElevatedButton(
      {super.key,
      required this.gradient,
      required this.shadowGradient,
      this.label = "Button",
      this.labelColor = Colors.white});

  @override
  State<TokiElevatedButton> createState() => _TokiElevatedButtonState();
}

class _TokiElevatedButtonState extends State<TokiElevatedButton>
    with TickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;
  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 150),
      vsync: this,
    );
    final _curvedAnimation =
        CurvedAnimation(parent: _controller, curve: Curves.easeOut)
          ..addListener(() {
            setState(() {});
          });
    _animation = Tween<double>(begin: 6, end: 2).animate(_curvedAnimation);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        _controller.forward();
        Future.delayed(Duration(milliseconds: 150), () {
          _controller.reverse();
        });
      },
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          Container(
            width: getResponsiveWidth(147),
            height: getResponsiveHeight(65),
            decoration: BoxDecoration(
              gradient: widget.shadowGradient,
              borderRadius: BorderRadius.circular(
                getResponsiveHeight(20),
              ),
            ),
          ),
          Positioned(
              bottom: getResponsiveHeight(_animation.value),
              width: getResponsiveWidth(147),
              height: getResponsiveHeight(65),
              child: Container(
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(
                      getResponsiveHeight(20),
                    ),
                    gradient: widget.gradient.copyWith(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter)),
                child: Center(
                    child: Text(
                  widget.label,
                  style: Theme.of(context).textTheme.labelLarge?.copyWith(
                        color: widget.labelColor,
                        fontSize: getResponsiveHeight(24),
                        fontWeight: FontWeight.w700,
                      ),
                )),
              )),
        ],
      ),
    );
  }
}
