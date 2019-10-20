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
      };var element = document.getElementById("d7f860ac-b8d1-44a6-957c-0141bcfb19ef");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7f860ac-b8d1-44a6-957c-0141bcfb19ef' but no matching script tag was found. ")
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
                  var docs_json = {"c24d696c-9a73-468c-991f-50493c2feae3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"94dae25e-190a-4c2d-b34d-abc540bfd906","type":"Toolbar"},{"attributes":{"formatter":{"id":"2dc6a0f8-c644-4a2e-8176-33f0ba5d282b","type":"BasicTickFormatter"},"plot":{"id":"6a69a76c-11dd-45a3-83fa-0081bfccb062","type":"Plot"},"ticker":{"id":"b08b3f97-f379-44f2-9783-7d52445edf9c","type":"BasicTicker"}},"id":"4570f85f-0e23-45fc-b762-bbb7e7bede02","type":"LinearAxis"},{"attributes":{"plot":{"id":"6a69a76c-11dd-45a3-83fa-0081bfccb062","type":"Plot"},"ticker":{"id":"aa246b45-6784-4316-a0d1-fc35b0151f25","type":"BasicTicker"}},"id":"f769e790-2dc4-4bd1-9b41-904f272008a1","type":"Grid"},{"attributes":{},"id":"b08b3f97-f379-44f2-9783-7d52445edf9c","type":"BasicTicker"},{"attributes":{},"id":"aa246b45-6784-4316-a0d1-fc35b0151f25","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9113b2ba-4e35-48c4-a873-b92ebd28e6dc","type":"DataRange1d"},{"attributes":{},"id":"2dc6a0f8-c644-4a2e-8176-33f0ba5d282b","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb9a6208-6ee9-4640-8928-0cdeaf5a7f0d","type":"Circle"},{"attributes":{"callback":null},"id":"cf23171e-136f-47ee-aef9-271557d3f94d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"868bc6b9-60ce-46a7-a565-e823e16b93d7","type":"BasicTickFormatter"},"plot":{"id":"6a69a76c-11dd-45a3-83fa-0081bfccb062","type":"Plot"},"ticker":{"id":"aa246b45-6784-4316-a0d1-fc35b0151f25","type":"BasicTicker"}},"id":"ca20d9d0-8681-4a84-a29c-b7241d140e42","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"916de242-2fa9-4bb7-b804-26c36ca7b301","type":"ColumnDataSource"},{"attributes":{},"id":"868bc6b9-60ce-46a7-a565-e823e16b93d7","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6a69a76c-11dd-45a3-83fa-0081bfccb062","type":"Plot"},"ticker":{"id":"b08b3f97-f379-44f2-9783-7d52445edf9c","type":"BasicTicker"}},"id":"579fe51e-28c2-4cb4-98ba-d32d9dbe2aa7","type":"Grid"},{"attributes":{"data_source":{"id":"916de242-2fa9-4bb7-b804-26c36ca7b301","type":"ColumnDataSource"},"glyph":{"id":"eb9a6208-6ee9-4640-8928-0cdeaf5a7f0d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"104f84c5-bdbd-4f00-917f-45059f3ff812","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"ca20d9d0-8681-4a84-a29c-b7241d140e42","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4570f85f-0e23-45fc-b762-bbb7e7bede02","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"104f84c5-bdbd-4f00-917f-45059f3ff812","type":"GlyphRenderer"},{"id":"ca20d9d0-8681-4a84-a29c-b7241d140e42","type":"LinearAxis"},{"id":"4570f85f-0e23-45fc-b762-bbb7e7bede02","type":"LinearAxis"},{"id":"f769e790-2dc4-4bd1-9b41-904f272008a1","type":"Grid"},{"id":"579fe51e-28c2-4cb4-98ba-d32d9dbe2aa7","type":"Grid"}],"title":null,"tool_events":{"id":"fd04456c-8464-4670-8ffb-c2709d28b83f","type":"ToolEvents"},"toolbar":{"id":"94dae25e-190a-4c2d-b34d-abc540bfd906","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cf23171e-136f-47ee-aef9-271557d3f94d","type":"DataRange1d"},"y_range":{"id":"9113b2ba-4e35-48c4-a873-b92ebd28e6dc","type":"DataRange1d"}},"id":"6a69a76c-11dd-45a3-83fa-0081bfccb062","type":"Plot"},{"attributes":{},"id":"fd04456c-8464-4670-8ffb-c2709d28b83f","type":"ToolEvents"}],"root_ids":["6a69a76c-11dd-45a3-83fa-0081bfccb062"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"c24d696c-9a73-468c-991f-50493c2feae3","elementid":"d7f860ac-b8d1-44a6-957c-0141bcfb19ef","modelid":"6a69a76c-11dd-45a3-83fa-0081bfccb062"}];
                  
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