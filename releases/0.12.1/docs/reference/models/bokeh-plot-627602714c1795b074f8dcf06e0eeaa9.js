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
      };var element = document.getElementById("657d2b22-5ebf-4c39-bf84-ef2b6a0b445c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '657d2b22-5ebf-4c39-bf84-ef2b6a0b445c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"63860dcb-dcae-4ec4-89a7-e189d313bff8":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"6f9c67a7-57e5-4607-8149-edefeb9ec0a0","type":"Toolbar"},{"attributes":{"formatter":{"id":"75b742e5-8ae2-4ac0-bdb6-1529cff4102f","type":"BasicTickFormatter"},"plot":{"id":"2483940b-a504-4456-93da-5456df18c7e4","type":"Plot"},"ticker":{"id":"af976250-f76d-4d1a-95f2-1b8b4928eec2","type":"BasicTicker"}},"id":"e6945c98-49e4-4bae-9ebe-607044ccfb2b","type":"LinearAxis"},{"attributes":{},"id":"af976250-f76d-4d1a-95f2-1b8b4928eec2","type":"BasicTicker"},{"attributes":{},"id":"962384cd-7d23-4d7a-b0a5-2e190c1aca5a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"95f76054-c7d5-42e6-99bc-c3f9365a076d","type":"DataRange1d"},{"attributes":{"below":[{"id":"acd83ebf-eb7a-4dca-ae9c-21395338c6b1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e6945c98-49e4-4bae-9ebe-607044ccfb2b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e992ffbb-5e0a-45c4-b827-ff85671d9f21","type":"GlyphRenderer"},{"id":"acd83ebf-eb7a-4dca-ae9c-21395338c6b1","type":"LinearAxis"},{"id":"e6945c98-49e4-4bae-9ebe-607044ccfb2b","type":"LinearAxis"},{"id":"cba91040-2e47-4cf8-be81-767c2948a226","type":"Grid"},{"id":"32f5cc4d-2630-4aec-b715-415c7ecc20d4","type":"Grid"}],"title":null,"tool_events":{"id":"5015904c-0eef-4397-ab37-b7e21f2531c6","type":"ToolEvents"},"toolbar":{"id":"6f9c67a7-57e5-4607-8149-edefeb9ec0a0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"eaa0af23-cf6f-4d3f-8172-eb01a8edff8a","type":"DataRange1d"},"y_range":{"id":"95f76054-c7d5-42e6-99bc-c3f9365a076d","type":"DataRange1d"}},"id":"2483940b-a504-4456-93da-5456df18c7e4","type":"Plot"},{"attributes":{},"id":"aa79155c-0b87-4561-9a2f-215238ef19e3","type":"BasicTicker"},{"attributes":{"callback":null},"id":"eaa0af23-cf6f-4d3f-8172-eb01a8edff8a","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"2483940b-a504-4456-93da-5456df18c7e4","type":"Plot"},"ticker":{"id":"af976250-f76d-4d1a-95f2-1b8b4928eec2","type":"BasicTicker"}},"id":"32f5cc4d-2630-4aec-b715-415c7ecc20d4","type":"Grid"},{"attributes":{"plot":{"id":"2483940b-a504-4456-93da-5456df18c7e4","type":"Plot"},"ticker":{"id":"aa79155c-0b87-4561-9a2f-215238ef19e3","type":"BasicTicker"}},"id":"cba91040-2e47-4cf8-be81-767c2948a226","type":"Grid"},{"attributes":{},"id":"5015904c-0eef-4397-ab37-b7e21f2531c6","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dea8bad9-fcf0-4947-8ebb-802f44e74ed2","type":"Patch"},{"attributes":{},"id":"75b742e5-8ae2-4ac0-bdb6-1529cff4102f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c207ce21-3e66-47a5-81aa-c0bda59e57a8","type":"ColumnDataSource"},"glyph":{"id":"dea8bad9-fcf0-4947-8ebb-802f44e74ed2","type":"Patch"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e992ffbb-5e0a-45c4-b827-ff85671d9f21","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"962384cd-7d23-4d7a-b0a5-2e190c1aca5a","type":"BasicTickFormatter"},"plot":{"id":"2483940b-a504-4456-93da-5456df18c7e4","type":"Plot"},"ticker":{"id":"aa79155c-0b87-4561-9a2f-215238ef19e3","type":"BasicTicker"}},"id":"acd83ebf-eb7a-4dca-ae9c-21395338c6b1","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0,2.0,1.862068965517241,1.7241379310344827,1.5862068965517242,1.4482758620689653,1.3103448275862069,1.1724137931034484,1.0344827586206895,0.896551724137931,0.7586206896551726,0.6206896551724137,0.48275862068965525,0.34482758620689635,0.2068965517241379,0.06896551724137945,-0.06896551724137945,-0.2068965517241379,-0.3448275862068966,-0.48275862068965525,-0.6206896551724137,-0.7586206896551724,-0.896551724137931,-1.0344827586206897,-1.1724137931034484,-1.3103448275862069,-1.4482758620689655,-1.5862068965517242,-1.7241379310344827,-1.8620689655172413,-2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0,8.2,7.52936979785969,6.896789536266349,6.302259215219976,5.74577883472057,5.227348394768133,4.746967895362664,4.304637336504161,3.900356718192628,3.5341260404280623,3.2059453032104637,2.9158145065398338,2.6637336504161713,2.449702734839477,2.2737217598097508,2.135790725326992,2.0359096313912013,1.9740784780023783,1.9502972651605233,1.9645659928656363,2.016884661117717,2.107253269916766,2.235671819262783,2.4021403091557674,2.6066587395957193,2.84922711058264,3.1298454221165284,3.448513674197384,3.805231866825208,4.2]}},"id":"c207ce21-3e66-47a5-81aa-c0bda59e57a8","type":"ColumnDataSource"}],"root_ids":["2483940b-a504-4456-93da-5456df18c7e4"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"63860dcb-dcae-4ec4-89a7-e189d313bff8","elementid":"657d2b22-5ebf-4c39-bf84-ef2b6a0b445c","modelid":"2483940b-a504-4456-93da-5456df18c7e4"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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