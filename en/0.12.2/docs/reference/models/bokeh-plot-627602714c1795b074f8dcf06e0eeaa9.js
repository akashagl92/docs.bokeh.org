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
      };var element = document.getElementById("2d835889-af04-4716-93b4-069c01349e9c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d835889-af04-4716-93b4-069c01349e9c' but no matching script tag was found. ")
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
                  var docs_json = {"4d03f5be-1c90-4ef0-bcfe-f9b0da8808dc":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.8620689655172413,-1.7241379310344827,-1.5862068965517242,-1.4482758620689655,-1.3103448275862069,-1.1724137931034484,-1.0344827586206897,-0.896551724137931,-0.7586206896551724,-0.6206896551724137,-0.48275862068965525,-0.3448275862068966,-0.2068965517241379,-0.06896551724137945,0.06896551724137945,0.2068965517241379,0.34482758620689635,0.48275862068965525,0.6206896551724137,0.7586206896551726,0.896551724137931,1.0344827586206895,1.1724137931034484,1.3103448275862069,1.4482758620689653,1.5862068965517242,1.7241379310344827,1.862068965517241,2.0,2.0,1.862068965517241,1.7241379310344827,1.5862068965517242,1.4482758620689653,1.3103448275862069,1.1724137931034484,1.0344827586206895,0.896551724137931,0.7586206896551726,0.6206896551724137,0.48275862068965525,0.34482758620689635,0.2068965517241379,0.06896551724137945,-0.06896551724137945,-0.2068965517241379,-0.3448275862068966,-0.48275862068965525,-0.6206896551724137,-0.7586206896551724,-0.896551724137931,-1.0344827586206897,-1.1724137931034484,-1.3103448275862069,-1.4482758620689655,-1.5862068965517242,-1.7241379310344827,-1.8620689655172413,-2.0],"y":[4.0,3.4673008323424495,2.9726516052318663,2.5160523186682524,2.0975029726516055,1.7170035671819261,1.3745541022592156,1.0701545778834722,0.8038049940546969,0.5755053507728893,0.38525564803804985,0.23305588585017845,0.11890606420927469,0.04280618311533887,0.004756242568371006,0.004756242568371006,0.04280618311533887,0.11890606420927453,0.23305588585017845,0.38525564803804985,0.5755053507728897,0.8038049940546969,1.0701545778834718,1.3745541022592156,1.7170035671819261,2.0975029726516046,2.5160523186682524,2.9726516052318663,3.4673008323424486,4.0,8.2,7.52936979785969,6.896789536266349,6.302259215219976,5.74577883472057,5.227348394768133,4.746967895362664,4.304637336504161,3.900356718192628,3.5341260404280623,3.2059453032104637,2.9158145065398338,2.6637336504161713,2.449702734839477,2.2737217598097508,2.135790725326992,2.0359096313912013,1.9740784780023783,1.9502972651605233,1.9645659928656363,2.016884661117717,2.107253269916766,2.235671819262783,2.4021403091557674,2.6066587395957193,2.84922711058264,3.1298454221165284,3.448513674197384,3.805231866825208,4.2]}},"id":"dcb49c9c-6a9e-41ab-aabd-8c984b6a40cf","type":"ColumnDataSource"},{"attributes":{},"id":"f32cf04f-e896-4e34-965c-1ca8b480c343","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a8e3ed3e-ba40-446c-ac3b-446ac0c1c363","type":"Plot"},"ticker":{"id":"b46af994-0291-40dd-9c25-6ed1c0131d24","type":"BasicTicker"}},"id":"9b28adb1-ffc7-49bd-92f1-283fbff73f63","type":"Grid"},{"attributes":{"formatter":{"id":"297f4b66-17d3-412f-8758-afee5c984f30","type":"BasicTickFormatter"},"plot":{"id":"a8e3ed3e-ba40-446c-ac3b-446ac0c1c363","type":"Plot"},"ticker":{"id":"8fd9cfa7-ae2d-48c2-9d4f-13dd51efc9d0","type":"BasicTicker"}},"id":"4ab05405-bfa1-44d5-ac62-40a82b387248","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa641dc5-7ff7-47bb-b23e-93298b24c8ed","type":"Patch"},{"attributes":{"data_source":{"id":"dcb49c9c-6a9e-41ab-aabd-8c984b6a40cf","type":"ColumnDataSource"},"glyph":{"id":"aa641dc5-7ff7-47bb-b23e-93298b24c8ed","type":"Patch"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"49a5c3a7-2d8f-45ad-a893-9a5e79487547","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a2b5b6e8-53d3-4464-804f-c8927d91ee2a","type":"Toolbar"},{"attributes":{},"id":"e9441f2f-4f64-46a7-8b05-9058618e6b45","type":"ToolEvents"},{"attributes":{"callback":null},"id":"23966bc6-dc72-455c-b6d1-2d3fe27749f5","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"a8e3ed3e-ba40-446c-ac3b-446ac0c1c363","type":"Plot"},"ticker":{"id":"8fd9cfa7-ae2d-48c2-9d4f-13dd51efc9d0","type":"BasicTicker"}},"id":"e575c909-8af0-4468-b0af-0809f74874cc","type":"Grid"},{"attributes":{},"id":"b46af994-0291-40dd-9c25-6ed1c0131d24","type":"BasicTicker"},{"attributes":{"below":[{"id":"1ac33429-ed47-4cb0-912b-093e740d6086","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4ab05405-bfa1-44d5-ac62-40a82b387248","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"49a5c3a7-2d8f-45ad-a893-9a5e79487547","type":"GlyphRenderer"},{"id":"1ac33429-ed47-4cb0-912b-093e740d6086","type":"LinearAxis"},{"id":"4ab05405-bfa1-44d5-ac62-40a82b387248","type":"LinearAxis"},{"id":"9b28adb1-ffc7-49bd-92f1-283fbff73f63","type":"Grid"},{"id":"e575c909-8af0-4468-b0af-0809f74874cc","type":"Grid"}],"title":null,"tool_events":{"id":"e9441f2f-4f64-46a7-8b05-9058618e6b45","type":"ToolEvents"},"toolbar":{"id":"a2b5b6e8-53d3-4464-804f-c8927d91ee2a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0ada37ce-75ea-4a89-b0d9-e3a7a9f833bd","type":"DataRange1d"},"y_range":{"id":"23966bc6-dc72-455c-b6d1-2d3fe27749f5","type":"DataRange1d"}},"id":"a8e3ed3e-ba40-446c-ac3b-446ac0c1c363","type":"Plot"},{"attributes":{},"id":"297f4b66-17d3-412f-8758-afee5c984f30","type":"BasicTickFormatter"},{"attributes":{},"id":"8fd9cfa7-ae2d-48c2-9d4f-13dd51efc9d0","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0ada37ce-75ea-4a89-b0d9-e3a7a9f833bd","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f32cf04f-e896-4e34-965c-1ca8b480c343","type":"BasicTickFormatter"},"plot":{"id":"a8e3ed3e-ba40-446c-ac3b-446ac0c1c363","type":"Plot"},"ticker":{"id":"b46af994-0291-40dd-9c25-6ed1c0131d24","type":"BasicTicker"}},"id":"1ac33429-ed47-4cb0-912b-093e740d6086","type":"LinearAxis"}],"root_ids":["a8e3ed3e-ba40-446c-ac3b-446ac0c1c363"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"4d03f5be-1c90-4ef0-bcfe-f9b0da8808dc","elementid":"2d835889-af04-4716-93b4-069c01349e9c","modelid":"a8e3ed3e-ba40-446c-ac3b-446ac0c1c363"}];
                  
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