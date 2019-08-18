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
      };var element = document.getElementById("ad82a6d5-4ff2-42d6-be75-a511bb78bcbe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ad82a6d5-4ff2-42d6-be75-a511bb78bcbe' but no matching script tag was found. ")
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
                  var docs_json = {"5f2c3f76-d02b-4171-b13e-7ff5ed5cb1f3":{"roots":{"references":[{"attributes":{"data_source":{"id":"df9c694d-a904-4474-9125-e7a34361b29f","type":"ColumnDataSource"},"glyph":{"id":"0ff11504-e1c9-40b9-892b-c193992e8e12","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fbb260e4-f638-4820-88a5-1a45648326fb","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"6c4f6e87-1bec-400d-9f14-698add64196c","type":"Toolbar"},{"attributes":{},"id":"5de71f0a-3b2f-4cd0-9a2c-ac737d0378f0","type":"BasicTicker"},{"attributes":{},"id":"1da5f0cd-0231-4111-a2aa-b5280fe2dd53","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"eaa2a680-c4e0-46ff-b715-9430b383d4eb","type":"BasicTickFormatter"},"plot":{"id":"0ef89333-071b-4387-81c5-58644028c235","type":"Plot"},"ticker":{"id":"5de71f0a-3b2f-4cd0-9a2c-ac737d0378f0","type":"BasicTicker"}},"id":"365077dd-48fa-4d56-8839-8b8363a8425c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ea1a6006-82e8-4dc4-9ab8-63e3f4b85ca5","type":"DataRange1d"},{"attributes":{"plot":{"id":"0ef89333-071b-4387-81c5-58644028c235","type":"Plot"},"ticker":{"id":"5de71f0a-3b2f-4cd0-9a2c-ac737d0378f0","type":"BasicTicker"}},"id":"c0c9cdc7-3c78-4b0b-9172-04c10cea3186","type":"Grid"},{"attributes":{},"id":"a7aa7d4a-6a54-4981-befc-e2a66c83d460","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0ef89333-071b-4387-81c5-58644028c235","type":"Plot"},"ticker":{"id":"a7aa7d4a-6a54-4981-befc-e2a66c83d460","type":"BasicTicker"}},"id":"1c4bf144-3c01-4f4c-a0b2-0c020c2dc619","type":"Grid"},{"attributes":{},"id":"eaa2a680-c4e0-46ff-b715-9430b383d4eb","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1da5f0cd-0231-4111-a2aa-b5280fe2dd53","type":"BasicTickFormatter"},"plot":{"id":"0ef89333-071b-4387-81c5-58644028c235","type":"Plot"},"ticker":{"id":"a7aa7d4a-6a54-4981-befc-e2a66c83d460","type":"BasicTicker"}},"id":"a0b2c30a-c767-46d4-897e-4d7e312fdbd9","type":"LinearAxis"},{"attributes":{"below":[{"id":"365077dd-48fa-4d56-8839-8b8363a8425c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a0b2c30a-c767-46d4-897e-4d7e312fdbd9","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fbb260e4-f638-4820-88a5-1a45648326fb","type":"GlyphRenderer"},{"id":"365077dd-48fa-4d56-8839-8b8363a8425c","type":"LinearAxis"},{"id":"a0b2c30a-c767-46d4-897e-4d7e312fdbd9","type":"LinearAxis"},{"id":"c0c9cdc7-3c78-4b0b-9172-04c10cea3186","type":"Grid"},{"id":"1c4bf144-3c01-4f4c-a0b2-0c020c2dc619","type":"Grid"}],"title":null,"tool_events":{"id":"9dd5d043-d7b6-4f75-acc7-794f2ab31290","type":"ToolEvents"},"toolbar":{"id":"6c4f6e87-1bec-400d-9f14-698add64196c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ea1a6006-82e8-4dc4-9ab8-63e3f4b85ca5","type":"DataRange1d"},"y_range":{"id":"a6ef1222-5838-4b3c-8fdc-69011b9a7311","type":"DataRange1d"}},"id":"0ef89333-071b-4387-81c5-58644028c235","type":"Plot"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ff11504-e1c9-40b9-892b-c193992e8e12","type":"Line"},{"attributes":{},"id":"9dd5d043-d7b6-4f75-acc7-794f2ab31290","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0]}},"id":"df9c694d-a904-4474-9125-e7a34361b29f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"a6ef1222-5838-4b3c-8fdc-69011b9a7311","type":"DataRange1d"}],"root_ids":["0ef89333-071b-4387-81c5-58644028c235"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"5f2c3f76-d02b-4171-b13e-7ff5ed5cb1f3","elementid":"ad82a6d5-4ff2-42d6-be75-a511bb78bcbe","modelid":"0ef89333-071b-4387-81c5-58644028c235"}];
                  
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