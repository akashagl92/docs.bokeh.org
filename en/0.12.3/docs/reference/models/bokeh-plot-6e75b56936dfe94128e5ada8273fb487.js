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
      };var element = document.getElementById("2b6dca44-df40-4435-b35f-3ea4b9c542d5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b6dca44-df40-4435-b35f-3ea4b9c542d5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"c203e678-115c-4c17-9ff0-b83f686afaae":{"roots":{"references":[{"attributes":{"formatter":{"id":"fe729523-d06f-4f66-8918-0430d285876f","type":"BasicTickFormatter"},"plot":{"id":"884522a5-17b6-4143-8e40-7dac971f899c","type":"Plot"},"ticker":{"id":"49f80a61-3ca2-404f-90ac-a6ffbdfc6d6e","type":"BasicTicker"}},"id":"68fd0e4e-9571-4a1e-8d8d-ec018889c0e7","type":"LinearAxis"},{"attributes":{"callback":null},"id":"83392300-3f9f-4c55-8bab-ceddcac11b7d","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b19c441-ef63-43c0-87d1-0019e25bff28","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0d997ecb-8f07-4be3-b66b-71251e9a1cf8","type":"Toolbar"},{"attributes":{},"id":"fe729523-d06f-4f66-8918-0430d285876f","type":"BasicTickFormatter"},{"attributes":{},"id":"da0b9263-efb5-4288-957f-ca9bd028e862","type":"BasicTickFormatter"},{"attributes":{},"id":"7976c120-8198-4bb4-b2a0-d77b1752be12","type":"ToolEvents"},{"attributes":{"formatter":{"id":"da0b9263-efb5-4288-957f-ca9bd028e862","type":"BasicTickFormatter"},"plot":{"id":"884522a5-17b6-4143-8e40-7dac971f899c","type":"Plot"},"ticker":{"id":"289c04d1-fbeb-4977-8213-77caaab11feb","type":"BasicTicker"}},"id":"be377cc7-4060-49c5-b053-5815e8f73d28","type":"LinearAxis"},{"attributes":{},"id":"289c04d1-fbeb-4977-8213-77caaab11feb","type":"BasicTicker"},{"attributes":{},"id":"49f80a61-3ca2-404f-90ac-a6ffbdfc6d6e","type":"BasicTicker"},{"attributes":{"data_source":{"id":"309b5f3d-c6a8-4a8f-9ff0-9aef02ffb399","type":"ColumnDataSource"},"glyph":{"id":"8b19c441-ef63-43c0-87d1-0019e25bff28","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a135bdbe-2c66-41f4-ab05-2eaddbabcc94","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"884522a5-17b6-4143-8e40-7dac971f899c","type":"Plot"},"ticker":{"id":"289c04d1-fbeb-4977-8213-77caaab11feb","type":"BasicTicker"}},"id":"b854e53e-7758-4c18-87ed-1a43b710dbd6","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0]}},"id":"309b5f3d-c6a8-4a8f-9ff0-9aef02ffb399","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"fba2e190-8aeb-4f09-b221-5fa62b58763b","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"884522a5-17b6-4143-8e40-7dac971f899c","type":"Plot"},"ticker":{"id":"49f80a61-3ca2-404f-90ac-a6ffbdfc6d6e","type":"BasicTicker"}},"id":"afa0a228-6ffe-4fca-aa84-bf543fd13174","type":"Grid"},{"attributes":{"below":[{"id":"be377cc7-4060-49c5-b053-5815e8f73d28","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"68fd0e4e-9571-4a1e-8d8d-ec018889c0e7","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a135bdbe-2c66-41f4-ab05-2eaddbabcc94","type":"GlyphRenderer"},{"id":"be377cc7-4060-49c5-b053-5815e8f73d28","type":"LinearAxis"},{"id":"68fd0e4e-9571-4a1e-8d8d-ec018889c0e7","type":"LinearAxis"},{"id":"b854e53e-7758-4c18-87ed-1a43b710dbd6","type":"Grid"},{"id":"afa0a228-6ffe-4fca-aa84-bf543fd13174","type":"Grid"}],"title":null,"tool_events":{"id":"7976c120-8198-4bb4-b2a0-d77b1752be12","type":"ToolEvents"},"toolbar":{"id":"0d997ecb-8f07-4be3-b66b-71251e9a1cf8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fba2e190-8aeb-4f09-b221-5fa62b58763b","type":"DataRange1d"},"y_range":{"id":"83392300-3f9f-4c55-8bab-ceddcac11b7d","type":"DataRange1d"}},"id":"884522a5-17b6-4143-8e40-7dac971f899c","type":"Plot"}],"root_ids":["884522a5-17b6-4143-8e40-7dac971f899c"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"c203e678-115c-4c17-9ff0-b83f686afaae","elementid":"2b6dca44-df40-4435-b35f-3ea4b9c542d5","modelid":"884522a5-17b6-4143-8e40-7dac971f899c"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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