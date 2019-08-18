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
      };var element = document.getElementById("895e4c4d-16cd-4f78-b83c-a9eeb72bbdde");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '895e4c4d-16cd-4f78-b83c-a9eeb72bbdde' but no matching script tag was found. ")
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
                  var docs_json = {"1808e892-82c3-4482-ab08-e005d6409b2d":{"roots":{"references":[{"attributes":{"below":[{"id":"b7168ec7-2462-4eeb-8335-b20e13f1189e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6319cdbd-4829-4b9c-b4a5-42f753307be1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d9b03fd9-98d5-494c-9e18-22f7bf8c16fc","type":"GlyphRenderer"},{"id":"b7168ec7-2462-4eeb-8335-b20e13f1189e","type":"LinearAxis"},{"id":"6319cdbd-4829-4b9c-b4a5-42f753307be1","type":"LinearAxis"},{"id":"ae9bc695-19eb-4334-b89b-8f746f62c327","type":"Grid"},{"id":"7bb09844-ccb5-451e-bbda-04e19c90f080","type":"Grid"}],"title":null,"tool_events":{"id":"b63cf6a0-c206-49c6-bccb-86fc7ac36ba7","type":"ToolEvents"},"toolbar":{"id":"259c6acd-905c-44a2-94f9-4c097c6abb90","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"902051d2-dc4d-4137-a136-6faf18a52efc","type":"DataRange1d"},"y_range":{"id":"f53f92c2-2a9b-4460-8ff9-2f49a6d7c718","type":"DataRange1d"}},"id":"e9a41cd0-9749-4b09-9c1e-d7e07542f6d9","type":"Plot"},{"attributes":{},"id":"f53f8e53-0fd2-4dda-a5d9-8180c4826902","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e9a41cd0-9749-4b09-9c1e-d7e07542f6d9","type":"Plot"},"ticker":{"id":"2cb864ff-e6fc-40ba-be38-3d35a49a8999","type":"BasicTicker"}},"id":"ae9bc695-19eb-4334-b89b-8f746f62c327","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"e9a41cd0-9749-4b09-9c1e-d7e07542f6d9","type":"Plot"},"ticker":{"id":"7490f10e-a11b-4091-a598-06612b6f377b","type":"BasicTicker"}},"id":"7bb09844-ccb5-451e-bbda-04e19c90f080","type":"Grid"},{"attributes":{},"id":"b63cf6a0-c206-49c6-bccb-86fc7ac36ba7","type":"ToolEvents"},{"attributes":{},"id":"2cb864ff-e6fc-40ba-be38-3d35a49a8999","type":"BasicTicker"},{"attributes":{"callback":null},"id":"902051d2-dc4d-4137-a136-6faf18a52efc","type":"DataRange1d"},{"attributes":{},"id":"7490f10e-a11b-4091-a598-06612b6f377b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f53f92c2-2a9b-4460-8ff9-2f49a6d7c718","type":"DataRange1d"},{"attributes":{"formatter":{"id":"5d907ec9-af6b-4062-be68-57346654122a","type":"BasicTickFormatter"},"plot":{"id":"e9a41cd0-9749-4b09-9c1e-d7e07542f6d9","type":"Plot"},"ticker":{"id":"7490f10e-a11b-4091-a598-06612b6f377b","type":"BasicTicker"}},"id":"6319cdbd-4829-4b9c-b4a5-42f753307be1","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"28b8e7c8-41a0-407f-9a8f-1d1ff9ed2ab8","type":"Segment"},{"attributes":{},"id":"5d907ec9-af6b-4062-be68-57346654122a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xm01","y","ym01","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1]}},"id":"ba681c3b-0be4-4809-ab62-50adb3f269a5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ba681c3b-0be4-4809-ab62-50adb3f269a5","type":"ColumnDataSource"},"glyph":{"id":"28b8e7c8-41a0-407f-9a8f-1d1ff9ed2ab8","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9b03fd9-98d5-494c-9e18-22f7bf8c16fc","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"259c6acd-905c-44a2-94f9-4c097c6abb90","type":"Toolbar"},{"attributes":{"formatter":{"id":"f53f8e53-0fd2-4dda-a5d9-8180c4826902","type":"BasicTickFormatter"},"plot":{"id":"e9a41cd0-9749-4b09-9c1e-d7e07542f6d9","type":"Plot"},"ticker":{"id":"2cb864ff-e6fc-40ba-be38-3d35a49a8999","type":"BasicTicker"}},"id":"b7168ec7-2462-4eeb-8335-b20e13f1189e","type":"LinearAxis"}],"root_ids":["e9a41cd0-9749-4b09-9c1e-d7e07542f6d9"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"1808e892-82c3-4482-ab08-e005d6409b2d","elementid":"895e4c4d-16cd-4f78-b83c-a9eeb72bbdde","modelid":"e9a41cd0-9749-4b09-9c1e-d7e07542f6d9"}];
                  
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