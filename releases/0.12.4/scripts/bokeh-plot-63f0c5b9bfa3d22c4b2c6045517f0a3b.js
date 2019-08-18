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
      };var element = document.getElementById("4f30b760-446b-450f-bc9a-41e3ef78ed00");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4f30b760-446b-450f-bc9a-41e3ef78ed00' but no matching script tag was found. ")
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
                var docs_json = {"581dcb86-b65a-4a5b-8ea9-224f875e0da9":{"roots":{"references":[{"attributes":{"below":[{"id":"bd7499c7-c405-41d6-8c7a-659c8837c617","type":"LinearAxis"}],"left":[{"id":"1b342369-81ce-4f2a-83a8-0bd85decfecd","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bd7499c7-c405-41d6-8c7a-659c8837c617","type":"LinearAxis"},{"id":"03a3adb2-ce94-492a-94cc-fb9fa53afc9b","type":"Grid"},{"id":"1b342369-81ce-4f2a-83a8-0bd85decfecd","type":"LinearAxis"},{"id":"ce596ad0-f942-4805-b53b-c6b49b4f6c58","type":"Grid"},{"id":"13d6a8db-2f31-410d-a0b5-bbb1eca8d935","type":"BoxAnnotation"},{"id":"72493d98-1c02-427b-965f-6c113eb8d4b3","type":"GlyphRenderer"}],"title":{"id":"008517cd-f09a-403d-b308-827b14cf5057","type":"Title"},"tool_events":{"id":"95ef4dac-d0af-4317-955b-9f2c3f260fdb","type":"ToolEvents"},"toolbar":{"id":"e08edace-c813-4829-8d15-e04ba1f75b4f","type":"Toolbar"},"x_range":{"id":"aac9d76e-2765-4ebe-ade3-bb7cb7d20246","type":"Range1d"},"y_range":{"id":"e44b88d3-e726-4267-9d73-02e924754d33","type":"Range1d"}},"id":"1c8fdeab-2fd1-4174-a857-04c6cad2831f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["width","x","y","height"],"data":{"height":[],"width":[],"x":[],"y":[]}},"id":"d8d2034a-9aae-490c-99b4-18b9c95a82da","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13d6a8db-2f31-410d-a0b5-bbb1eca8d935","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"e44b88d3-e726-4267-9d73-02e924754d33","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.3},"fill_color":{"value":"#009933"},"height":{"field":"height","units":"data"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"290d25ad-bb2c-4282-adea-a982ab4791cc","type":"Rect"},{"attributes":{"plot":null,"text":"Select Below"},"id":"008517cd-f09a-403d-b308-827b14cf5057","type":"Title"},{"attributes":{},"id":"95ef4dac-d0af-4317-955b-9f2c3f260fdb","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"66ad0bef-c572-4168-a2a7-a17ee6791b53","type":"BoxSelectTool"}]},"id":"e08edace-c813-4829-8d15-e04ba1f75b4f","type":"Toolbar"},{"attributes":{"data_source":{"id":"d8d2034a-9aae-490c-99b4-18b9c95a82da","type":"ColumnDataSource"},"glyph":{"id":"290d25ad-bb2c-4282-adea-a982ab4791cc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"290d25ad-bb2c-4282-adea-a982ab4791cc","type":"Rect"},"selection_glyph":{"id":"290d25ad-bb2c-4282-adea-a982ab4791cc","type":"Rect"}},"id":"72493d98-1c02-427b-965f-6c113eb8d4b3","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1c8fdeab-2fd1-4174-a857-04c6cad2831f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0b3f06c-7eb2-41ca-aa47-d2e3e2db775b","type":"BasicTicker"}},"id":"03a3adb2-ce94-492a-94cc-fb9fa53afc9b","type":"Grid"},{"attributes":{},"id":"1c194775-a8eb-4515-bff9-e2149fa7cf8a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"1c8fdeab-2fd1-4174-a857-04c6cad2831f","subtype":"Figure","type":"Plot"},"ticker":{"id":"990e5520-4f16-4120-9886-f0472c40f5a4","type":"BasicTicker"}},"id":"ce596ad0-f942-4805-b53b-c6b49b4f6c58","type":"Grid"},{"attributes":{"callback":{"id":"43d79171-b045-433e-901a-fb8b37c48ebe","type":"CustomJS"},"overlay":{"id":"13d6a8db-2f31-410d-a0b5-bbb1eca8d935","type":"BoxAnnotation"},"plot":{"id":"1c8fdeab-2fd1-4174-a857-04c6cad2831f","subtype":"Figure","type":"Plot"}},"id":"66ad0bef-c572-4168-a2a7-a17ee6791b53","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"aac9d76e-2765-4ebe-ade3-bb7cb7d20246","type":"Range1d"},{"attributes":{"formatter":{"id":"1c194775-a8eb-4515-bff9-e2149fa7cf8a","type":"BasicTickFormatter"},"plot":{"id":"1c8fdeab-2fd1-4174-a857-04c6cad2831f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0b3f06c-7eb2-41ca-aa47-d2e3e2db775b","type":"BasicTicker"}},"id":"bd7499c7-c405-41d6-8c7a-659c8837c617","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1a9f3823-ae69-478c-b4ba-7dd86fb0391b","type":"BasicTickFormatter"},"plot":{"id":"1c8fdeab-2fd1-4174-a857-04c6cad2831f","subtype":"Figure","type":"Plot"},"ticker":{"id":"990e5520-4f16-4120-9886-f0472c40f5a4","type":"BasicTicker"}},"id":"1b342369-81ce-4f2a-83a8-0bd85decfecd","type":"LinearAxis"},{"attributes":{"args":{"source":{"id":"d8d2034a-9aae-490c-99b4-18b9c95a82da","type":"ColumnDataSource"}},"code":"\n        // get data source from Callback args\n        var data = source.data;\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // trigger update of data source\n        source.trigger('change');\n    "},"id":"43d79171-b045-433e-901a-fb8b37c48ebe","type":"CustomJS"},{"attributes":{},"id":"f0b3f06c-7eb2-41ca-aa47-d2e3e2db775b","type":"BasicTicker"},{"attributes":{},"id":"1a9f3823-ae69-478c-b4ba-7dd86fb0391b","type":"BasicTickFormatter"},{"attributes":{},"id":"990e5520-4f16-4120-9886-f0472c40f5a4","type":"BasicTicker"}],"root_ids":["1c8fdeab-2fd1-4174-a857-04c6cad2831f"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"581dcb86-b65a-4a5b-8ea9-224f875e0da9","elementid":"4f30b760-446b-450f-bc9a-41e3ef78ed00","modelid":"1c8fdeab-2fd1-4174-a857-04c6cad2831f"}];
                
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
