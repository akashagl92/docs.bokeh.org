document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("109618f5-ae12-47e8-a34b-a4ddbd2a6db0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '109618f5-ae12-47e8-a34b-a4ddbd2a6db0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"2a7429ce-c12a-4d57-bdb3-5ef9d5817967":{"roots":{"references":[{"attributes":{},"id":"59405ee3-a92b-4b70-876a-073b1803737d","type":"ToolEvents"},{"attributes":{"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"}},"id":"7d1f8665-e744-4827-9ce6-bd46abe555c6","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dbc5f1c6-21c1-4c5a-a912-978337e3e829","type":"PanTool"},{"id":"94b8022b-11c1-48aa-a2ff-8a241696cd08","type":"WheelZoomTool"},{"id":"8aa70c6c-4a16-4e47-b82a-ce1e77b6f2c4","type":"BoxZoomTool"},{"id":"c05a9526-0de4-4ae3-9ab3-b3fbba97a8fe","type":"SaveTool"},{"id":"646b7118-cc63-4669-adbc-1f86d625b48f","type":"ResetTool"},{"id":"7d1f8665-e744-4827-9ce6-bd46abe555c6","type":"HelpTool"}]},"id":"d26723cc-6949-4a46-924c-c458c917cd27","type":"Toolbar"},{"attributes":{"callback":null},"id":"2a9a53b2-fab6-4b66-a2ac-785840bd637e","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bac92d15-2354-46e6-b1fa-7360a4ae74a4","type":"Circle"},{"attributes":{},"id":"485156b2-5d59-4b65-8b2c-be1dd8d466c4","type":"BasicTicker"},{"attributes":{"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"}},"id":"94b8022b-11c1-48aa-a2ff-8a241696cd08","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"32d0e259-4a8b-4e66-9eae-e8b163b859f3","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"253df4f3-af11-4730-9fac-0cd1f4c75864","type":"Circle"},{"attributes":{"data_source":{"id":"0cdc80ca-bc1a-41ea-841f-2a1a4862df92","type":"ColumnDataSource"},"glyph":{"id":"bac92d15-2354-46e6-b1fa-7360a4ae74a4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"253df4f3-af11-4730-9fac-0cd1f4c75864","type":"Circle"},"selection_glyph":null},"id":"735cacaa-fc0d-4875-b5ab-e9d3f7d6113e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"}},"id":"dbc5f1c6-21c1-4c5a-a912-978337e3e829","type":"PanTool"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"89a4c3b1-c173-4ad8-8354-4860e7e89ff8","type":"Title"},{"attributes":{"overlay":{"id":"88199314-5850-41c3-8e2f-7abbb2bca057","type":"BoxAnnotation"},"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"}},"id":"8aa70c6c-4a16-4e47-b82a-ce1e77b6f2c4","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"7daeeea0-f232-4c3f-9d7a-864b0f9706ce","type":"BasicTickFormatter"},"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4132f10-f87e-4490-9f99-3bcdeb00a352","type":"BasicTicker"}},"id":"ccf57b0d-cfe9-43f8-b463-6b3beb5780cd","type":"LinearAxis"},{"attributes":{},"id":"0d7dc3a1-19e3-48e8-81cc-9e1a52ea8ef6","type":"BasicTickFormatter"},{"attributes":{},"id":"c4132f10-f87e-4490-9f99-3bcdeb00a352","type":"BasicTicker"},{"attributes":{"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"485156b2-5d59-4b65-8b2c-be1dd8d466c4","type":"BasicTicker"}},"id":"37b24384-dfe6-4453-8024-245ef822c82a","type":"Grid"},{"attributes":{"below":[{"id":"fe6e2ae4-2ab1-4d22-ad8a-3fa67a79900a","type":"LinearAxis"}],"left":[{"id":"ccf57b0d-cfe9-43f8-b463-6b3beb5780cd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fe6e2ae4-2ab1-4d22-ad8a-3fa67a79900a","type":"LinearAxis"},{"id":"37b24384-dfe6-4453-8024-245ef822c82a","type":"Grid"},{"id":"ccf57b0d-cfe9-43f8-b463-6b3beb5780cd","type":"LinearAxis"},{"id":"8e441292-5193-4247-9651-ecfb03439057","type":"Grid"},{"id":"88199314-5850-41c3-8e2f-7abbb2bca057","type":"BoxAnnotation"},{"id":"735cacaa-fc0d-4875-b5ab-e9d3f7d6113e","type":"GlyphRenderer"}],"title":{"id":"89a4c3b1-c173-4ad8-8354-4860e7e89ff8","type":"Title"},"tool_events":{"id":"59405ee3-a92b-4b70-876a-073b1803737d","type":"ToolEvents"},"toolbar":{"id":"d26723cc-6949-4a46-924c-c458c917cd27","type":"Toolbar"},"x_range":{"id":"32d0e259-4a8b-4e66-9eae-e8b163b859f3","type":"DataRange1d"},"y_range":{"id":"2a9a53b2-fab6-4b66-a2ac-785840bd637e","type":"DataRange1d"}},"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4132f10-f87e-4490-9f99-3bcdeb00a352","type":"BasicTicker"}},"id":"8e441292-5193-4247-9651-ecfb03439057","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"88199314-5850-41c3-8e2f-7abbb2bca057","type":"BoxAnnotation"},{"attributes":{},"id":"7daeeea0-f232-4c3f-9d7a-864b0f9706ce","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"0cdc80ca-bc1a-41ea-841f-2a1a4862df92","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"0d7dc3a1-19e3-48e8-81cc-9e1a52ea8ef6","type":"BasicTickFormatter"},"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"485156b2-5d59-4b65-8b2c-be1dd8d466c4","type":"BasicTicker"}},"id":"fe6e2ae4-2ab1-4d22-ad8a-3fa67a79900a","type":"LinearAxis"},{"attributes":{"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"}},"id":"646b7118-cc63-4669-adbc-1f86d625b48f","type":"ResetTool"},{"attributes":{"plot":{"id":"280a28f4-9018-4452-9e44-b023e3c5a5e9","subtype":"Figure","type":"Plot"}},"id":"c05a9526-0de4-4ae3-9ab3-b3fbba97a8fe","type":"SaveTool"}],"root_ids":["280a28f4-9018-4452-9e44-b023e3c5a5e9"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"2a7429ce-c12a-4d57-bdb3-5ef9d5817967","elementid":"109618f5-ae12-47e8-a34b-a4ddbd2a6db0","modelid":"280a28f4-9018-4452-9e44-b023e3c5a5e9"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});