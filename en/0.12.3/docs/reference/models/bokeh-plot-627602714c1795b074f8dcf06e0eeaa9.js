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
      };var element = document.getElementById("c5212bc6-ed90-460c-a07e-398fb3a435a8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5212bc6-ed90-460c-a07e-398fb3a435a8' but no matching script tag was found. ")
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
                  var docs_json = {"7c031586-0008-4f78-8a49-e00ae40d5fad":{"roots":{"references":[{"attributes":{"formatter":{"id":"1294cc8a-39aa-4a26-8fa7-983450c0ae22","type":"BasicTickFormatter"},"plot":{"id":"88e41a8f-6fd2-4be8-b858-1823baf2edca","type":"Plot"},"ticker":{"id":"55b0a5ff-d51d-4c1f-b841-61f4e5924cd9","type":"BasicTicker"}},"id":"70d94487-d7cc-4a84-bdf1-60e6ed23aaef","type":"LinearAxis"},{"attributes":{"below":[{"id":"70d94487-d7cc-4a84-bdf1-60e6ed23aaef","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"994ddb90-039a-47c6-a206-cc9ac2fe8fec","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2fbc53c8-a7f1-43bf-a93a-1d0b60c334dc","type":"GlyphRenderer"},{"id":"70d94487-d7cc-4a84-bdf1-60e6ed23aaef","type":"LinearAxis"},{"id":"994ddb90-039a-47c6-a206-cc9ac2fe8fec","type":"LinearAxis"},{"id":"0fb0217d-b3ab-4a0c-8a8c-80e22d7e5a0f","type":"Grid"},{"id":"bc52aae6-f131-4f72-84f6-bf3e2b96679e","type":"Grid"}],"title":null,"tool_events":{"id":"64474f49-e09e-4b8c-95c6-004c807d58ec","type":"ToolEvents"},"toolbar":{"id":"47cf2a1b-5b08-4eb0-b8e0-d31602cbe051","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"46f3bdcf-6dd2-46d2-bd44-b2098420c0d7","type":"DataRange1d"},"y_range":{"id":"1962ae78-619e-4306-b167-43b603380f67","type":"DataRange1d"}},"id":"88e41a8f-6fd2-4be8-b858-1823baf2edca","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"47cf2a1b-5b08-4eb0-b8e0-d31602cbe051","type":"Toolbar"},{"attributes":{},"id":"64474f49-e09e-4b8c-95c6-004c807d58ec","type":"ToolEvents"},{"attributes":{},"id":"55b0a5ff-d51d-4c1f-b841-61f4e5924cd9","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0,2.0,1.862068965517241,1.7241379310344827,1.5862068965517242,1.4482758620689653,1.3103448275862069,1.1724137931034484,1.0344827586206895,0.896551724137931,0.7586206896551726,0.6206896551724137,0.48275862068965525,0.34482758620689635,0.2068965517241379,0.06896551724137945,-0.06896551724137945,-0.2068965517241379,-0.3448275862068966,-0.48275862068965525,-0.6206896551724137,-0.7586206896551724,-0.896551724137931,-1.0344827586206897,-1.1724137931034484,-1.3103448275862069,-1.4482758620689655,-1.5862068965517242,-1.7241379310344827,-1.8620689655172413,-2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0,8.2,7.52936979785969,6.896789536266349,6.302259215219976,5.74577883472057,5.227348394768133,4.746967895362664,4.304637336504161,3.900356718192628,3.5341260404280623,3.2059453032104637,2.9158145065398338,2.6637336504161713,2.449702734839477,2.2737217598097508,2.135790725326992,2.0359096313912013,1.9740784780023783,1.9502972651605233,1.9645659928656363,2.016884661117717,2.107253269916766,2.235671819262783,2.4021403091557674,2.6066587395957193,2.84922711058264,3.1298454221165284,3.448513674197384,3.805231866825208,4.2]}},"id":"ac1f10a4-9612-4552-a9ee-7b71dabc5df6","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"5ebbf4d7-7cc9-4f9c-942a-4e62ab5167f6","type":"BasicTickFormatter"},"plot":{"id":"88e41a8f-6fd2-4be8-b858-1823baf2edca","type":"Plot"},"ticker":{"id":"ca88f7fc-d797-44d0-b39d-f07c62090ba2","type":"BasicTicker"}},"id":"994ddb90-039a-47c6-a206-cc9ac2fe8fec","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"88e41a8f-6fd2-4be8-b858-1823baf2edca","type":"Plot"},"ticker":{"id":"ca88f7fc-d797-44d0-b39d-f07c62090ba2","type":"BasicTicker"}},"id":"bc52aae6-f131-4f72-84f6-bf3e2b96679e","type":"Grid"},{"attributes":{},"id":"ca88f7fc-d797-44d0-b39d-f07c62090ba2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1962ae78-619e-4306-b167-43b603380f67","type":"DataRange1d"},{"attributes":{},"id":"1294cc8a-39aa-4a26-8fa7-983450c0ae22","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ac2ff0d-3d71-4bd2-b51d-62188a0f1487","type":"Patch"},{"attributes":{},"id":"5ebbf4d7-7cc9-4f9c-942a-4e62ab5167f6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"88e41a8f-6fd2-4be8-b858-1823baf2edca","type":"Plot"},"ticker":{"id":"55b0a5ff-d51d-4c1f-b841-61f4e5924cd9","type":"BasicTicker"}},"id":"0fb0217d-b3ab-4a0c-8a8c-80e22d7e5a0f","type":"Grid"},{"attributes":{"callback":null},"id":"46f3bdcf-6dd2-46d2-bd44-b2098420c0d7","type":"DataRange1d"},{"attributes":{"data_source":{"id":"ac1f10a4-9612-4552-a9ee-7b71dabc5df6","type":"ColumnDataSource"},"glyph":{"id":"6ac2ff0d-3d71-4bd2-b51d-62188a0f1487","type":"Patch"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2fbc53c8-a7f1-43bf-a93a-1d0b60c334dc","type":"GlyphRenderer"}],"root_ids":["88e41a8f-6fd2-4be8-b858-1823baf2edca"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"7c031586-0008-4f78-8a49-e00ae40d5fad","elementid":"c5212bc6-ed90-460c-a07e-398fb3a435a8","modelid":"88e41a8f-6fd2-4be8-b858-1823baf2edca"}];
                  
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