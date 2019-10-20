(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("079cf9f9-94f4-484a-81fe-b9b0c9b26231");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '079cf9f9-94f4-484a-81fe-b9b0c9b26231' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"df212a47-0816-43b0-9157-7778f2f2ea27":{"roots":{"references":[{"attributes":{"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"}},"id":"708afeb6-3a5c-412c-942b-10ed91dfce33","type":"HelpTool"},{"attributes":{"callback":null},"id":"e9375b11-6e1a-4a1c-8676-71f4a9eec000","type":"DataRange1d"},{"attributes":{},"id":"a58d9838-67b6-4f0b-bc2c-eee2fe5168f5","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ce7bcc0-1163-4ec4-af1a-be2916d9b10d","type":"BasicTicker"}},"id":"ce974ab1-c6f1-4e48-bba4-651fd9fca9d7","type":"Grid"},{"attributes":{"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"}},"id":"bf390df7-0c0a-412d-bb5a-a24cb97c3362","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"22e091e3-5488-42a1-928e-070dd61cc3af","type":"ColumnDataSource"},"glyph":{"id":"65c0d171-f525-43f0-aa7c-7024bbc8a987","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":{"id":"269b96be-ce09-4914-8a43-26c10f91d281","type":"Ellipse"},"selection_glyph":null},"id":"8ca78738-3687-4838-bb8f-bbb57c4701ae","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"94b479e7-f844-442c-a758-815e9ea779f5","type":"PanTool"},{"id":"bf390df7-0c0a-412d-bb5a-a24cb97c3362","type":"WheelZoomTool"},{"id":"3b227cb2-0392-41e5-912c-2f8f030bc008","type":"BoxZoomTool"},{"id":"7c07b3e7-90f9-4a5a-ae67-d47e9000a155","type":"SaveTool"},{"id":"2dfe4853-4431-4e2d-8961-86fce36a96c6","type":"ResetTool"},{"id":"708afeb6-3a5c-412c-942b-10ed91dfce33","type":"HelpTool"}]},"id":"a20c7701-76d4-4a7a-991a-cc6c6e25b61d","type":"Toolbar"},{"attributes":{"below":[{"id":"392b97f3-742c-4ab6-a24a-5590bd7be01e","type":"LinearAxis"}],"left":[{"id":"b76e87c9-1e67-4cc7-970d-2860a7e8d17b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"392b97f3-742c-4ab6-a24a-5590bd7be01e","type":"LinearAxis"},{"id":"a1ba9a66-e4ab-4b36-af59-024f16f8c474","type":"Grid"},{"id":"b76e87c9-1e67-4cc7-970d-2860a7e8d17b","type":"LinearAxis"},{"id":"ce974ab1-c6f1-4e48-bba4-651fd9fca9d7","type":"Grid"},{"id":"beb591cd-4853-42bd-b123-d930759a516e","type":"BoxAnnotation"},{"id":"8ca78738-3687-4838-bb8f-bbb57c4701ae","type":"GlyphRenderer"}],"title":{"id":"0871798e-30c3-48f8-a85e-050a9c3af98e","type":"Title"},"tool_events":{"id":"a58d9838-67b6-4f0b-bc2c-eee2fe5168f5","type":"ToolEvents"},"toolbar":{"id":"a20c7701-76d4-4a7a-991a-cc6c6e25b61d","type":"Toolbar"},"x_range":{"id":"e9375b11-6e1a-4a1c-8676-71f4a9eec000","type":"DataRange1d"},"y_range":{"id":"b3b5c089-fc62-4a46-b54b-214e2af8986e","type":"DataRange1d"}},"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d23dddd4-b70c-4192-b983-5796deedea80","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"beb591cd-4853-42bd-b123-d930759a516e","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"65c0d171-f525-43f0-aa7c-7024bbc8a987","type":"Ellipse"},{"attributes":{"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3400e99-4e5b-4b37-ad25-e9d0f196fe86","type":"BasicTicker"}},"id":"a1ba9a66-e4ab-4b36-af59-024f16f8c474","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"22e091e3-5488-42a1-928e-070dd61cc3af","type":"ColumnDataSource"},{"attributes":{},"id":"b3400e99-4e5b-4b37-ad25-e9d0f196fe86","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d23dddd4-b70c-4192-b983-5796deedea80","type":"BasicTickFormatter"},"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3400e99-4e5b-4b37-ad25-e9d0f196fe86","type":"BasicTicker"}},"id":"392b97f3-742c-4ab6-a24a-5590bd7be01e","type":"LinearAxis"},{"attributes":{"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"}},"id":"94b479e7-f844-442c-a758-815e9ea779f5","type":"PanTool"},{"attributes":{"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"}},"id":"2dfe4853-4431-4e2d-8961-86fce36a96c6","type":"ResetTool"},{"attributes":{"callback":null},"id":"b3b5c089-fc62-4a46-b54b-214e2af8986e","type":"DataRange1d"},{"attributes":{"overlay":{"id":"beb591cd-4853-42bd-b123-d930759a516e","type":"BoxAnnotation"},"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"}},"id":"3b227cb2-0392-41e5-912c-2f8f030bc008","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"269b96be-ce09-4914-8a43-26c10f91d281","type":"Ellipse"},{"attributes":{"plot":null,"text":""},"id":"0871798e-30c3-48f8-a85e-050a9c3af98e","type":"Title"},{"attributes":{"formatter":{"id":"5a14e5de-b4a1-492a-b714-84ceecc88519","type":"BasicTickFormatter"},"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ce7bcc0-1163-4ec4-af1a-be2916d9b10d","type":"BasicTicker"}},"id":"b76e87c9-1e67-4cc7-970d-2860a7e8d17b","type":"LinearAxis"},{"attributes":{},"id":"5a14e5de-b4a1-492a-b714-84ceecc88519","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"51a2fb14-fae0-429b-a00d-b07e4c8233ad","subtype":"Figure","type":"Plot"}},"id":"7c07b3e7-90f9-4a5a-ae67-d47e9000a155","type":"SaveTool"},{"attributes":{},"id":"9ce7bcc0-1163-4ec4-af1a-be2916d9b10d","type":"BasicTicker"}],"root_ids":["51a2fb14-fae0-429b-a00d-b07e4c8233ad"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"df212a47-0816-43b0-9157-7778f2f2ea27","elementid":"079cf9f9-94f4-484a-81fe-b9b0c9b26231","modelid":"51a2fb14-fae0-429b-a00d-b07e4c8233ad"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
