(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("5309f73b-2977-4b6f-bc72-2ec8a720edb0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5309f73b-2977-4b6f-bc72-2ec8a720edb0' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"fe5e2d1b-d126-4e4c-9972-3022ddb0bd3d":{"roots":{"references":[{"attributes":{},"id":"31470","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"31424","type":"ColumnDataSource"}},"id":"31428","type":"CDSView"},{"attributes":{"overlay":{"id":"31491","type":"BoxAnnotation"}},"id":"31450","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"31402","type":"BasicTicker"}},"id":"31405","type":"Grid"},{"attributes":{},"id":"31468","type":"BasicTickFormatter"},{"attributes":{},"id":"31415","type":"ResetTool"},{"attributes":{"children":[[{"id":"31355","subtype":"Figure","type":"Plot"},0,0],[{"id":"31393","subtype":"Figure","type":"Plot"},0,1],[{"id":"31429","subtype":"Figure","type":"Plot"},0,2]]},"id":"31493","type":"GridBox"},{"attributes":{},"id":"31471","type":"Selection"},{"attributes":{},"id":"31414","type":"SaveTool"},{"attributes":{},"id":"31448","type":"PanTool"},{"attributes":{"data_source":{"id":"31461","type":"ColumnDataSource"},"glyph":{"id":"31462","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31463","type":"Square"},"selection_glyph":null,"view":{"id":"31465","type":"CDSView"}},"id":"31464","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"31482","type":"BoxAnnotation"}},"id":"31413","type":"BoxZoomTool"},{"attributes":{},"id":"31472","type":"UnionRenderers"},{"attributes":{},"id":"31412","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"31473","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31426","type":"Triangle"},{"attributes":{},"id":"31477","type":"BasicTickFormatter"},{"attributes":{},"id":"31479","type":"BasicTickFormatter"},{"attributes":{},"id":"31411","type":"PanTool"},{"attributes":{},"id":"31480","type":"Selection"},{"attributes":{"data_source":{"id":"31424","type":"ColumnDataSource"},"glyph":{"id":"31425","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31426","type":"Triangle"},"selection_glyph":null,"view":{"id":"31428","type":"CDSView"}},"id":"31427","type":"GlyphRenderer"},{"attributes":{},"id":"31481","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"31482","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"31357","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"31448","type":"PanTool"},{"id":"31449","type":"WheelZoomTool"},{"id":"31450","type":"BoxZoomTool"},{"id":"31451","type":"SaveTool"},{"id":"31452","type":"ResetTool"},{"id":"31453","type":"HelpTool"}]},"id":"31454","type":"Toolbar"},{"attributes":{},"id":"31486","type":"BasicTickFormatter"},{"attributes":{},"id":"31361","type":"LinearScale"},{"attributes":{"ticker":{"id":"31439","type":"BasicTicker"}},"id":"31442","type":"Grid"},{"attributes":{},"id":"31488","type":"BasicTickFormatter"},{"attributes":{},"id":"31489","type":"Selection"},{"attributes":{"below":[{"id":"31401","type":"LinearAxis"}],"center":[{"id":"31405","type":"Grid"},{"id":"31410","type":"Grid"}],"left":[{"id":"31406","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"31427","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"31417","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31357","type":"DataRange1d"},"x_scale":{"id":"31397","type":"LinearScale"},"y_range":{"id":"31359","type":"DataRange1d"},"y_scale":{"id":"31399","type":"LinearScale"}},"id":"31393","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31463","type":"Square"},{"attributes":{},"id":"31490","type":"UnionRenderers"},{"attributes":{"below":[{"id":"31365","type":"LinearAxis"}],"center":[{"id":"31369","type":"Grid"},{"id":"31374","type":"Grid"}],"left":[{"id":"31370","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"31391","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"31381","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31357","type":"DataRange1d"},"x_scale":{"id":"31361","type":"LinearScale"},"y_range":{"id":"31359","type":"DataRange1d"},"y_scale":{"id":"31363","type":"LinearScale"}},"id":"31355","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"31366","type":"BasicTicker"}},"id":"31369","type":"Grid"},{"attributes":{"source":{"id":"31461","type":"ColumnDataSource"}},"id":"31465","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"31491","type":"BoxAnnotation"},{"attributes":{},"id":"31366","type":"BasicTicker"},{"attributes":{"formatter":{"id":"31488","type":"BasicTickFormatter"},"ticker":{"id":"31439","type":"BasicTicker"}},"id":"31438","type":"LinearAxis"},{"attributes":{"callback":null},"id":"31359","type":"DataRange1d"},{"attributes":{"formatter":{"id":"31470","type":"BasicTickFormatter"},"ticker":{"id":"31366","type":"BasicTicker"}},"id":"31365","type":"LinearAxis"},{"attributes":{},"id":"31363","type":"LinearScale"},{"attributes":{"formatter":{"id":"31486","type":"BasicTickFormatter"},"ticker":{"id":"31444","type":"BasicTicker"}},"id":"31443","type":"LinearAxis"},{"attributes":{},"id":"31371","type":"BasicTicker"},{"attributes":{},"id":"31451","type":"SaveTool"},{"attributes":{"formatter":{"id":"31477","type":"BasicTickFormatter"},"ticker":{"id":"31407","type":"BasicTicker"}},"id":"31406","type":"LinearAxis"},{"attributes":{},"id":"31436","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"31371","type":"BasicTicker"}},"id":"31374","type":"Grid"},{"attributes":{},"id":"31434","type":"LinearScale"},{"attributes":{},"id":"31449","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"31432","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31462","type":"Square"},{"attributes":{"formatter":{"id":"31468","type":"BasicTickFormatter"},"ticker":{"id":"31371","type":"BasicTicker"}},"id":"31370","type":"LinearAxis"},{"attributes":{"data_source":{"id":"31388","type":"ColumnDataSource"},"glyph":{"id":"31389","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31390","type":"Circle"},"selection_glyph":null,"view":{"id":"31392","type":"CDSView"}},"id":"31391","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}},"selected":{"id":"31471","type":"Selection"},"selection_policy":{"id":"31472","type":"UnionRenderers"}},"id":"31388","type":"ColumnDataSource"},{"attributes":{},"id":"31452","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"31375","type":"PanTool"},{"id":"31376","type":"WheelZoomTool"},{"id":"31377","type":"BoxZoomTool"},{"id":"31378","type":"SaveTool"},{"id":"31379","type":"ResetTool"},{"id":"31380","type":"HelpTool"}]},"id":"31381","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31389","type":"Circle"},{"attributes":{},"id":"31444","type":"BasicTicker"},{"attributes":{},"id":"31453","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"31444","type":"BasicTicker"}},"id":"31447","type":"Grid"},{"attributes":{},"id":"31375","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31425","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31390","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"31407","type":"BasicTicker"}},"id":"31410","type":"Grid"},{"attributes":{"source":{"id":"31388","type":"ColumnDataSource"}},"id":"31392","type":"CDSView"},{"attributes":{},"id":"31439","type":"BasicTicker"},{"attributes":{"formatter":{"id":"31479","type":"BasicTickFormatter"},"ticker":{"id":"31402","type":"BasicTicker"}},"id":"31401","type":"LinearAxis"},{"attributes":{},"id":"31378","type":"SaveTool"},{"attributes":{},"id":"31379","type":"ResetTool"},{"attributes":{},"id":"31397","type":"LinearScale"},{"attributes":{},"id":"31376","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D9o+gYFGL7vPyN/Fo5v+e4/XLHeqjC17T9foQT4kvbrP1YykSHGxOk/tDkVSdQo5z9AE3HJfC3kP10soPEH3+A/thLH2SiW2j9bQ2NRvgDTP4xzC34aOsY/cyCwKKhcqD8NyeikuUm0v0/eq9oaN8q/PSGBd67u1L+LyZhelmvcv8/m3JG2ueG/hlh3f5705L9dUsfUNNnnv10cd/2OW+q/wfLvCVdx7L8bLVJC9hHuv0PyRoe4Nu+/XjTx7ufa778HB0As4PvvvwQ9tXAZme+/V1DNmyq07r/ZTwivwlDtv4lZi6GZdOu/JeDa0Vgn6b/aPrV2e3Lmv820DJEnYeO/+v//////3783i/Tn4LnYv4yAwi7oDdG/30QPZF83wr9U+ijPKj+QvxHsuGvkX7w/k1rgSlktzj+GU4hOOdfWP1q1P3WwOd4/AasNgtOP4j+XUJVeWbblPzhQz6Jvg+g/uvBkh4zr6j99NRQyxuTsP/FJcov7Zu4/Juk3u/Vr7z+VSynBge/vP5RLKcGB7+8/Jek3u/Vr7z/vSXKL+2buP381FDLG5Ow/uPBkh4zr6j86UM+ib4PoP5VQlV5ZtuU/BasNgtOP4j9UtT91sDneP45TiE4519Y/hVrgSlktzj807Lhr5F+8P8f6KM8qP5C/zUQPZF83wr+SgMIu6A3Rvy6L9Ofgudi/BgAAAAAA4L/PtAyRJ2Hjv9k+tXZ7cua/I+Da0Vgn6b+NWYuhmXTrv9pPCK/CUO2/V1DNmyq07r8EPbVwGZnvvwgHQCzg+++/XjTx7ufa779E8kaHuDbvvx4tUkL2Ee6/wPLvCVdx7L9dHHf9jlvqv2BSx9Q02ee/gVh3f5705L/M5tyRtrnhv4zJmF6Wa9y/RiGBd67u1L8x3qvaGjfKv/DI6KS5SbS/bCCwKKhcqD90cwt+GjrGP2VDY1G+ANM/uRLH2SiW2j9aLKDxB9/gPzoTccl8LeQ/uDkVSdQo5z9WMpEhxsTpP16hBPiS9us/X7HeqjC17T8kfxaOb/nuP2j6BgUYvu8/AAAAAAAA8D8=","dtype":"float64","shape":[100]}},"selected":{"id":"31480","type":"Selection"},"selection_policy":{"id":"31481","type":"UnionRenderers"}},"id":"31424","type":"ColumnDataSource"},{"attributes":{},"id":"31416","type":"HelpTool"},{"attributes":{"overlay":{"id":"31473","type":"BoxAnnotation"}},"id":"31377","type":"BoxZoomTool"},{"attributes":{},"id":"31402","type":"BasicTicker"},{"attributes":{"below":[{"id":"31438","type":"LinearAxis"}],"center":[{"id":"31442","type":"Grid"},{"id":"31447","type":"Grid"}],"left":[{"id":"31443","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"31464","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"31454","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"31357","type":"DataRange1d"},"x_scale":{"id":"31434","type":"LinearScale"},"y_range":{"id":"31432","type":"DataRange1d"},"y_scale":{"id":"31436","type":"LinearScale"}},"id":"31429","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"31399","type":"LinearScale"},{"attributes":{},"id":"31407","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D+yzYPRkeXxP7ihgYdrgfM/rb0yquzM9D/245G2v8L1P87bFRfwXvY/2iiqbvqe9j/kKcny1oH2P2p9E6r9B/Y/t9rofWQz9T/V4vYmdwf0P338ARYJifI/RdfykkG+8D9ETRXIBF3tPyugTMuSxOg/JsOhHxvG4z8XRefmX+zcP4TfmO5l1dE/4IAW3tnTuT9YVAYbRxi0v26sY4ZobNC/kDyhvhiP278fJw0IIiDjv8rnndrvKei/4klI9jTQ7L9i6ms85X/wvyB3ITG5U/K/nEtETQ/c879kyJx6lxL1v3a2nZlS8vW/jCxGFqd39r9Ikzy8b6D2v7IbDo0EbPa/VCYsdD3b9b+XNIXNbvD0vyX2CM1fr/O/Ewqe7jod8r/hQKSueEDwv7KoVMWJQey/OkhCQL6N57//x2pm7XjivwiD/egKMNq/XFreULgEzr/Qjtyf0basv8jQmYTCjb8/YDFTHT090z9zKk7fyUfePwQ64frNauQ/Br4PG51d6T/UmpIn8OftPyz+X62J+/A/JAqwLSe98j/wrAGOlDH0P+CqQLrTUvU/YyQQQD0c9j8rs4V6k4r2Pw41lOsPnPY/THYpjGpQ9j9uO9/02qj1P8SNeVoTqPQ/wTrZcjVS8z/dcSFwwazxPxnyVbD+fO8/vXE0K8Ye6z+6a09r11DmP/7dFbP8JuE/Qpmw0PVs1z8YNwvg51bIP4A3qsMi+oY/tJyl3I19xb9ijLYfHAnWv+4O12hWfOC/dgkSnTaw5b/Eiyd/wIrqv1M5qN/19+6/bw/Nc81y8b9c/veZwCHzv4mZSz7lgfS/nqNH2pCN9b9CMd7bdED2vxjtFmOwl/a/lMBYHdyR9r+wHoMNEC/2vww2BinjcPW/NHKRy2Ra9L+mR1EcEPDyv8K/p5i5N/G/fKrPIO5w7r87P/7sBPXpv0iCivwvDuW/bUUVRECh3788RM3h1qPUv0i1wErRosK/wBtiTTs7oT9AtNpTsC7LP571ygVNz9g/audXAYjQ4T/buikNCPDmP2xZBmcMses//P//////7z8=","dtype":"float64","shape":[100]}},"selected":{"id":"31489","type":"Selection"},"selection_policy":{"id":"31490","type":"UnionRenderers"}},"id":"31461","type":"ColumnDataSource"},{"attributes":{},"id":"31380","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"31411","type":"PanTool"},{"id":"31412","type":"WheelZoomTool"},{"id":"31413","type":"BoxZoomTool"},{"id":"31414","type":"SaveTool"},{"id":"31415","type":"ResetTool"},{"id":"31416","type":"HelpTool"}]},"id":"31417","type":"Toolbar"}],"root_ids":["31493"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"fe5e2d1b-d126-4e4c-9972-3022ddb0bd3d","roots":{"31493":"5309f73b-2977-4b6f-bc72-2ec8a720edb0"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();