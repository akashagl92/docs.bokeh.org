(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("de856a00-c424-4844-9186-6f54034e5e5a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'de856a00-c424-4844-9186-6f54034e5e5a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"0333e40e-5a99-417b-8a97-c4efc115181c":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}},"selected":{"id":"36002","type":"Selection"},"selection_policy":{"id":"36003","type":"UnionRenderers"}},"id":"35914","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"35919","subtype":"Figure","type":"Plot"},"ticker":{"id":"35933","type":"BasicTicker"}},"id":"35936","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35993","type":"Square"},{"attributes":{},"id":"35938","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"35984","type":"BoxAnnotation"}},"id":"35978","type":"BoxZoomTool"},{"attributes":{},"id":"36020","type":"Selection"},{"attributes":{"children":[{"id":"35879","subtype":"Figure","type":"Plot"},{"id":"35919","subtype":"Figure","type":"Plot"},{"id":"35957","subtype":"Figure","type":"Plot"}]},"id":"36023","type":"Row"},{"attributes":{},"id":"35895","type":"BasicTicker"},{"attributes":{},"id":"35887","type":"LinearScale"},{"attributes":{},"id":"36002","type":"Selection"},{"attributes":{},"id":"35925","type":"LinearScale"},{"attributes":{"formatter":{"id":"36000","type":"BasicTickFormatter"},"plot":{"id":"35879","subtype":"Figure","type":"Plot"},"ticker":{"id":"35895","type":"BasicTicker"}},"id":"35894","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35954","type":"Triangle"},{"attributes":{},"id":"35940","type":"SaveTool"},{"attributes":{"data_source":{"id":"35914","type":"ColumnDataSource"},"glyph":{"id":"35915","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35916","type":"Circle"},"selection_glyph":null,"view":{"id":"35918","type":"CDSView"}},"id":"35917","type":"GlyphRenderer"},{"attributes":{},"id":"35981","type":"HelpTool"},{"attributes":{"plot":{"id":"35879","subtype":"Figure","type":"Plot"},"ticker":{"id":"35890","type":"BasicTicker"}},"id":"35893","type":"Grid"},{"attributes":{"overlay":{"id":"35945","type":"BoxAnnotation"}},"id":"35939","type":"BoxZoomTool"},{"attributes":{},"id":"35904","type":"HelpTool"},{"attributes":{},"id":"36007","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"35952","type":"ColumnDataSource"},"glyph":{"id":"35953","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35954","type":"Triangle"},"selection_glyph":null,"view":{"id":"35956","type":"CDSView"}},"id":"35955","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"35907","type":"BoxAnnotation"}},"id":"35901","type":"BoxZoomTool"},{"attributes":{},"id":"35962","type":"LinearScale"},{"attributes":{"formatter":{"id":"35998","type":"BasicTickFormatter"},"plot":{"id":"35879","subtype":"Figure","type":"Plot"},"ticker":{"id":"35890","type":"BasicTicker"}},"id":"35889","type":"LinearAxis"},{"attributes":{},"id":"35976","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35953","type":"Triangle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35937","type":"PanTool"},{"id":"35938","type":"WheelZoomTool"},{"id":"35939","type":"BoxZoomTool"},{"id":"35940","type":"SaveTool"},{"id":"35941","type":"ResetTool"},{"id":"35942","type":"HelpTool"}]},"id":"35943","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35984","type":"BoxAnnotation"},{"attributes":{},"id":"36018","type":"BasicTickFormatter"},{"attributes":{},"id":"35980","type":"ResetTool"},{"attributes":{},"id":"35941","type":"ResetTool"},{"attributes":{"formatter":{"id":"36016","type":"BasicTickFormatter"},"plot":{"id":"35957","subtype":"Figure","type":"Plot"},"ticker":{"id":"35967","type":"BasicTicker"}},"id":"35966","type":"LinearAxis"},{"attributes":{},"id":"35942","type":"HelpTool"},{"attributes":{},"id":"35964","type":"LinearScale"},{"attributes":{},"id":"36021","type":"UnionRenderers"},{"attributes":{},"id":"36003","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"35881","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"35957","subtype":"Figure","type":"Plot"},"ticker":{"id":"35972","type":"BasicTicker"}},"id":"35975","type":"Grid"},{"attributes":{},"id":"35885","type":"LinearScale"},{"attributes":{},"id":"35979","type":"SaveTool"},{"attributes":{},"id":"35900","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35899","type":"PanTool"},{"id":"35900","type":"WheelZoomTool"},{"id":"35901","type":"BoxZoomTool"},{"id":"35902","type":"SaveTool"},{"id":"35903","type":"ResetTool"},{"id":"35904","type":"HelpTool"}]},"id":"35905","type":"Toolbar"},{"attributes":{},"id":"35937","type":"PanTool"},{"attributes":{},"id":"36000","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35907","type":"BoxAnnotation"},{"attributes":{},"id":"35933","type":"BasicTicker"},{"attributes":{},"id":"35977","type":"WheelZoomTool"},{"attributes":{},"id":"35972","type":"BasicTicker"},{"attributes":{"callback":null},"id":"35883","type":"DataRange1d"},{"attributes":{"source":{"id":"35991","type":"ColumnDataSource"}},"id":"35995","type":"CDSView"},{"attributes":{},"id":"35899","type":"PanTool"},{"attributes":{},"id":"35967","type":"BasicTicker"},{"attributes":{},"id":"36011","type":"Selection"},{"attributes":{},"id":"35998","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"36023","type":"Row"}]},"id":"36024","type":"Column"},{"attributes":{"plot":{"id":"35919","subtype":"Figure","type":"Plot"},"ticker":{"id":"35928","type":"BasicTicker"}},"id":"35931","type":"Grid"},{"attributes":{},"id":"35903","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35915","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35916","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35992","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"35879","subtype":"Figure","type":"Plot"},"ticker":{"id":"35895","type":"BasicTicker"}},"id":"35898","type":"Grid"},{"attributes":{"formatter":{"id":"36007","type":"BasicTickFormatter"},"plot":{"id":"35919","subtype":"Figure","type":"Plot"},"ticker":{"id":"35928","type":"BasicTicker"}},"id":"35927","type":"LinearAxis"},{"attributes":{},"id":"36009","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"35966","type":"LinearAxis"}],"left":[{"id":"35971","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"35966","type":"LinearAxis"},{"id":"35970","type":"Grid"},{"id":"35971","type":"LinearAxis"},{"id":"35975","type":"Grid"},{"id":"35984","type":"BoxAnnotation"},{"id":"35994","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"35982","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"35881","type":"DataRange1d"},"x_scale":{"id":"35962","type":"LinearScale"},"y_range":{"id":"35960","type":"DataRange1d"},"y_scale":{"id":"35964","type":"LinearScale"}},"id":"35957","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"36018","type":"BasicTickFormatter"},"plot":{"id":"35957","subtype":"Figure","type":"Plot"},"ticker":{"id":"35972","type":"BasicTicker"}},"id":"35971","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D+yzYPRkeXxP7ihgYdrgfM/rb0yquzM9D/245G2v8L1P87bFRfwXvY/2iiqbvqe9j/kKcny1oH2P2p9E6r9B/Y/t9rofWQz9T/V4vYmdwf0P338ARYJifI/RdfykkG+8D9ETRXIBF3tPyugTMuSxOg/JsOhHxvG4z8XRefmX+zcP4TfmO5l1dE/2IAW3tnTuT9QVAYbRxi0v26sY4ZobNC/kDyhvhiP278fJw0IIiDjv8rnndrvKei/4klI9jTQ7L9i6ms85X/wvyB3ITG5U/K/nEtETQ/c879kyJx6lxL1v3a2nZlS8vW/jCxGFqd39r9Ikzy8b6D2v7IbDo0EbPa/VCYsdD3b9b+XNIXNbvD0vyX2CM1fr/O/Ewqe7jod8r/hQKSueEDwv7KoVMWJQey/OkhCQL6N57//x2pm7XjivwmD/egKMNq/WFreULgEzr/gjtyf0basv8DQmYTCjb8/YDFTHT090z9zKk7fyUfePwQ64frNauQ/Br4PG51d6T/UmpIn8OftPyz+X62J+/A/JAqwLSe98j/wrAGOlDH0P9+qQLrTUvU/YiQQQD0c9j8qs4V6k4r2Pw41lOsPnPY/TXYpjGpQ9j9uO9/02qj1P8SNeVoTqPQ/wTrZcjVS8z/dcSFwwazxPxnyVbD+fO8/vXE0K8Ye6z+6a09r11DmP/7dFbP8JuE/QJmw0PVs1z8YNwvg51bIP4A3qsMi+oY/tJyl3I19xb9gjLYfHAnWv+4O12hWfOC/dgkSnTaw5b/Eiyd/wIrqv1M5qN/19+6/bg/Nc81y8b9c/veZwCHzv4mZSz7lgfS/nqNH2pCN9b9BMd7bdED2vxjtFmOwl/a/lMBYHdyR9r+wHoMNEC/2vww2BinjcPW/M3KRy2Ra9L+mR1EcEPDyv8K/p5i5N/G/fKrPIO5w7r87P/7sBPXpv0iCivwvDuW/bUUVRECh3788RM3h1qPUv0S1wErRosK/wBtiTTs7oT9AtNpTsC7LP531ygVNz9g/audXAYjQ4T/buikNCPDmP2xZBmcMses//P//////7z8=","dtype":"float64","shape":[100]}},"selected":{"id":"36020","type":"Selection"},"selection_policy":{"id":"36021","type":"UnionRenderers"}},"id":"35991","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"35927","type":"LinearAxis"}],"left":[{"id":"35932","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"35927","type":"LinearAxis"},{"id":"35931","type":"Grid"},{"id":"35932","type":"LinearAxis"},{"id":"35936","type":"Grid"},{"id":"35945","type":"BoxAnnotation"},{"id":"35955","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"35943","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"35881","type":"DataRange1d"},"x_scale":{"id":"35923","type":"LinearScale"},"y_range":{"id":"35883","type":"DataRange1d"},"y_scale":{"id":"35925","type":"LinearScale"}},"id":"35919","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"35960","type":"DataRange1d"},{"attributes":{},"id":"35902","type":"SaveTool"},{"attributes":{},"id":"35928","type":"BasicTicker"},{"attributes":{},"id":"36012","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35976","type":"PanTool"},{"id":"35977","type":"WheelZoomTool"},{"id":"35978","type":"BoxZoomTool"},{"id":"35979","type":"SaveTool"},{"id":"35980","type":"ResetTool"},{"id":"35981","type":"HelpTool"}]},"id":"35982","type":"Toolbar"},{"attributes":{"source":{"id":"35952","type":"ColumnDataSource"}},"id":"35956","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D9o+gYFGL7vPyN/Fo5v+e4/XLHeqjC17T9foQT4kvbrP1YykSHGxOk/tDkVSdQo5z9AE3HJfC3kP1wsoPEH3+A/thLH2SiW2j9bQ2NRvgDTP4xzC34aOsY/cyCwKKhcqD8MyeikuUm0v0/eq9oaN8q/PSGBd67u1L+LyZhelmvcv8/m3JG2ueG/hlh3f5705L9dUsfUNNnnv10cd/2OW+q/wfLvCVdx7L8bLVJC9hHuv0PyRoe4Nu+/XjTx7ufa778HB0As4PvvvwQ9tXAZme+/V1DNmyq07r/ZTwivwlDtv4lZi6GZdOu/JeDa0Vgn6b/aPrV2e3Lmv8y0DJEnYeO/+f//////3783i/Tn4LnYv4yAwi7oDdG/3kQPZF83wr9U+ijPKj+QvxHsuGvkX7w/k1rgSlktzj+GU4hOOdfWP1m1P3WwOd4/AasNgtOP4j+XUJVeWbblPzdQz6Jvg+g/uvBkh4zr6j99NRQyxuTsP/FJcov7Zu4/Juk3u/Vr7z+VSynBge/vP5RLKcGB7+8/Jek3u/Vr7z/vSXKL+2buP381FDLG5Ow/uPBkh4zr6j86UM+ib4PoP5RQlV5ZtuU/BasNgtOP4j9TtT91sDneP45TiE4519Y/hVrgSlktzj807Lhr5F+8P8f6KM8qP5C/zUQPZF83wr+TgMIu6A3Rvy+L9Ofgudi/BwAAAAAA4L/PtAyRJ2Hjv9k+tXZ7cua/I+Da0Vgn6b+NWYuhmXTrv9pPCK/CUO2/V1DNmyq07r8DPbVwGZnvvwgHQCzg+++/XjTx7ufa779E8kaHuDbvvx4tUkL2Ee6/wPLvCVdx7L9dHHf9jlvqv2BSx9Q02ee/gVh3f5705L/M5tyRtrnhv4zJmF6Wa9y/RSGBd67u1L8x3qvaGjfKv/DI6KS5SbS/bSCwKKhcqD9zcwt+GjrGP2ZDY1G+ANM/uRLH2SiW2j9aLKDxB9/gPzsTccl8LeQ/uDkVSdQo5z9WMpEhxsTpP16hBPiS9us/X7HeqjC17T8kfxaOb/nuP2j6BgUYvu8/AAAAAAAA8D8=","dtype":"float64","shape":[100]}},"selected":{"id":"36011","type":"Selection"},"selection_policy":{"id":"36012","type":"UnionRenderers"}},"id":"35952","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35991","type":"ColumnDataSource"},"glyph":{"id":"35992","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35993","type":"Square"},"selection_glyph":null,"view":{"id":"35995","type":"CDSView"}},"id":"35994","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"35889","type":"LinearAxis"}],"left":[{"id":"35894","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"35889","type":"LinearAxis"},{"id":"35893","type":"Grid"},{"id":"35894","type":"LinearAxis"},{"id":"35898","type":"Grid"},{"id":"35907","type":"BoxAnnotation"},{"id":"35917","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"35905","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"35881","type":"DataRange1d"},"x_scale":{"id":"35885","type":"LinearScale"},"y_range":{"id":"35883","type":"DataRange1d"},"y_scale":{"id":"35887","type":"LinearScale"}},"id":"35879","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35890","type":"BasicTicker"},{"attributes":{"plot":{"id":"35957","subtype":"Figure","type":"Plot"},"ticker":{"id":"35967","type":"BasicTicker"}},"id":"35970","type":"Grid"},{"attributes":{},"id":"36016","type":"BasicTickFormatter"},{"attributes":{},"id":"35923","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35945","type":"BoxAnnotation"},{"attributes":{"source":{"id":"35914","type":"ColumnDataSource"}},"id":"35918","type":"CDSView"},{"attributes":{"formatter":{"id":"36009","type":"BasicTickFormatter"},"plot":{"id":"35919","subtype":"Figure","type":"Plot"},"ticker":{"id":"35933","type":"BasicTicker"}},"id":"35932","type":"LinearAxis"}],"root_ids":["36024"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"0333e40e-5a99-417b-8a97-c4efc115181c","roots":{"36024":"de856a00-c424-4844-9186-6f54034e5e5a"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();