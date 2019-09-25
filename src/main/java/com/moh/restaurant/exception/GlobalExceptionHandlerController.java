// package com.moh.restaurant.exception;

// import javax.servlet.http.HttpServletRequest;

// import org.springframework.boot.web.servlet.error.ErrorController;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.ResponseBody;


// import java.io.IOException;
// import java.util.HashMap;
// import java.util.Map;

// import javax.servlet.http.HttpServletResponse;


// import org.springframework.boot.web.reactive.error.DefaultErrorAttributes;
// import org.springframework.boot.web.servlet.error.ErrorAttributes;
// import org.springframework.context.annotation.Bean;
// import org.springframework.http.HttpStatus;
// import org.springframework.security.access.AccessDeniedException;
// import org.springframework.web.bind.annotation.ExceptionHandler;
// import org.springframework.web.bind.annotation.RestControllerAdvice;
// import org.springframework.web.context.request.RequestAttributes;
// import org.springframework.web.context.request.WebRequest;
// import org.springframework.web.reactive.function.server.ServerRequest;
// import org.hibernate.annotations.common.util.impl.LoggerFactory;
// import org.slf4j.Logger;
// import org.springframework.web.bind.MethodArgumentNotValidException;
// import org.springframework.web.context.request.RequestAttributes;

// @RestControllerAdvice
// public class GlobalExceptionHandlerController extends DefaultErrorAttributes{

//     // private final Logger log = (Logger) LoggerFactory.logger(GlobalExceptionHandlerController.class);
   
//     // @Bean
//     // public ErrorAttributes errorAttributes() {
//     //   // Hide exception field in the return object
    
//     //     return null;
//     // }

//     @Override
//     public Map getErrorAttributes(ServerRequest requestAttributes, boolean includeStackTrace) {
//         Map errorAttributes = super.getErrorAttributes( requestAttributes, includeStackTrace);

//         Throwable throwable = getError( requestAttributes);
//         Throwable cause = throwable.getCause();
//         if (cause != null) {
//             Map causeErrorAttributes = new HashMap<>();
//             causeErrorAttributes.put("exception", cause.getClass().getName());
//             causeErrorAttributes.put("message", cause.getMessage());
//             errorAttributes.put("cause", causeErrorAttributes);
//         }
//         return errorAttributes;
//     }

//   @ExceptionHandler(CustomException.class)
//   public void handleCustomException(HttpServletResponse res, CustomException ex) throws IOException {
// //    log.debug("tell me the truth : { ex }");
//     res.sendError(ex.getHttpStatus().value(), ex.getMessage());
//   }

//   @ExceptionHandler(AccessDeniedException.class)
//   public void handleAccessDeniedException(HttpServletResponse res) throws IOException {
//     res.sendError(HttpStatus.FORBIDDEN.value(), "Access denied");
//   }

//   @ExceptionHandler(Exception.class)
//   public void handleException(HttpServletResponse res) throws IOException {
//     res.sendError(HttpStatus.BAD_REQUEST.value(), "Something went wrong");
//   }

// }

// // @Controller
// // public class GlobalExceptionHandlerController implements ErrorController {

// //   @RequestMapping("/error")
// //   @ResponseBody
// //   public String handleError(HttpServletRequest request) {
// //       Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
// //       Exception exception = (Exception) request.getAttribute("javax.servlet.error.exception");
// //       return String.format("<html><body><h2>Error Page</h2><div>Status code: <b>%s</b></div>"
// //                       + "<div>Exception Message: <b>%s</b></div><body></html>",
// //               statusCode, exception==null? "N/A": exception.getMessage());
// //   }

// //   @Override
// //   public String getErrorPath() {
// //       return "/error";
// //   }
// // }