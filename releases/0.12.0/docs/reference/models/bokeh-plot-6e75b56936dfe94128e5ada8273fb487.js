document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("8babd7a4-1ad5-48f5-99fa-b7a11a57f759");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8babd7a4-1ad5-48f5-99fa-b7a11a57f759' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6c1ee0a9-3eab-4450-85f8-95a9e9e8cc61":{"roots":{"references":[{"attributes":{},"id":"2aec3afb-d5f7-4c94-921d-59238df3804c","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2be73bd-5297-449d-a9b9-dbbaf154319f","type":"Line"},{"attributes":{"formatter":{"id":"2aec3afb-d5f7-4c94-921d-59238df3804c","type":"BasicTickFormatter"},"plot":{"id":"f7661de2-fb7d-46f3-9789-752887ea6630","type":"Plot"},"ticker":{"id":"d410fb5e-1cf5-4b49-a032-20ebc3df9718","type":"BasicTicker"}},"id":"7903f520-6d7e-4d67-87ad-84a07decca23","type":"LinearAxis"},{"attributes":{"formatter":{"id":"cec36ebd-0f18-494b-8a62-125100c36484","type":"BasicTickFormatter"},"plot":{"id":"f7661de2-fb7d-46f3-9789-752887ea6630","type":"Plot"},"ticker":{"id":"7764ba5c-a24f-46ce-8e10-e7d5e650d189","type":"BasicTicker"}},"id":"1923d0a7-3f74-49f7-b5ec-8cd7191d98e5","type":"LinearAxis"},{"attributes":{},"id":"cec36ebd-0f18-494b-8a62-125100c36484","type":"BasicTickFormatter"},{"attributes":{},"id":"17be3378-af92-4132-9e86-d21f2a192abe","type":"ToolEvents"},{"attributes":{},"id":"d410fb5e-1cf5-4b49-a032-20ebc3df9718","type":"BasicTicker"},{"attributes":{},"id":"7764ba5c-a24f-46ce-8e10-e7d5e650d189","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f7661de2-fb7d-46f3-9789-752887ea6630","type":"Plot"},"ticker":{"id":"d410fb5e-1cf5-4b49-a032-20ebc3df9718","type":"BasicTicker"}},"id":"9b6b4395-e85b-4234-9f95-0d9639533ef9","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ec06a418-d219-410a-bb5b-eff6b062f717","type":"Toolbar"},{"attributes":{"callback":null},"id":"2738fe2c-aeed-422e-8a20-0f50867616eb","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0]}},"id":"326a3b82-f2e8-4aff-ba75-02ac81653948","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1923d0a7-3f74-49f7-b5ec-8cd7191d98e5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7903f520-6d7e-4d67-87ad-84a07decca23","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"87f13883-e012-4e63-901c-52bd6c0044a1","type":"GlyphRenderer"},{"id":"1923d0a7-3f74-49f7-b5ec-8cd7191d98e5","type":"LinearAxis"},{"id":"7903f520-6d7e-4d67-87ad-84a07decca23","type":"LinearAxis"},{"id":"95a542b1-de05-4085-a3f2-bd82b8c43a53","type":"Grid"},{"id":"9b6b4395-e85b-4234-9f95-0d9639533ef9","type":"Grid"}],"title":null,"tool_events":{"id":"17be3378-af92-4132-9e86-d21f2a192abe","type":"ToolEvents"},"toolbar":{"id":"ec06a418-d219-410a-bb5b-eff6b062f717","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2738fe2c-aeed-422e-8a20-0f50867616eb","type":"DataRange1d"},"y_range":{"id":"f4075b0b-267b-4c33-84d6-5585f921558b","type":"DataRange1d"}},"id":"f7661de2-fb7d-46f3-9789-752887ea6630","type":"Plot"},{"attributes":{"callback":null},"id":"f4075b0b-267b-4c33-84d6-5585f921558b","type":"DataRange1d"},{"attributes":{"data_source":{"id":"326a3b82-f2e8-4aff-ba75-02ac81653948","type":"ColumnDataSource"},"glyph":{"id":"e2be73bd-5297-449d-a9b9-dbbaf154319f","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"87f13883-e012-4e63-901c-52bd6c0044a1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f7661de2-fb7d-46f3-9789-752887ea6630","type":"Plot"},"ticker":{"id":"7764ba5c-a24f-46ce-8e10-e7d5e650d189","type":"BasicTicker"}},"id":"95a542b1-de05-4085-a3f2-bd82b8c43a53","type":"Grid"}],"root_ids":["f7661de2-fb7d-46f3-9789-752887ea6630"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"6c1ee0a9-3eab-4450-85f8-95a9e9e8cc61","elementid":"8babd7a4-1ad5-48f5-99fa-b7a11a57f759","modelid":"f7661de2-fb7d-46f3-9789-752887ea6630"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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