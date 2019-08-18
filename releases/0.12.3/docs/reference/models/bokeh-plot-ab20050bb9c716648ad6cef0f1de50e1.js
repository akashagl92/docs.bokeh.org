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
      };var element = document.getElementById("e16dfb41-8f71-491e-8027-79c95227033a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e16dfb41-8f71-491e-8027-79c95227033a' but no matching script tag was found. ")
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
                  var docs_json = {"95df90cf-3c05-4a62-bc85-c9cb9592eeb8":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"1fcefe6a-c04e-459a-93db-64e599b9da11","type":"VBar"},{"attributes":{"callback":null},"id":"b7334c09-eb0f-46fa-b1a4-f784695a8b62","type":"DataRange1d"},{"attributes":{},"id":"6f25f278-9abe-4000-946a-b27e0335ce82","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0]}},"id":"d50ced0b-c8e3-4749-bfed-aa6981ac3371","type":"ColumnDataSource"},{"attributes":{},"id":"97b8b0b3-9980-4c45-b7a5-0ddba10c5a9e","type":"ToolEvents"},{"attributes":{"data_source":{"id":"d50ced0b-c8e3-4749-bfed-aa6981ac3371","type":"ColumnDataSource"},"glyph":{"id":"1fcefe6a-c04e-459a-93db-64e599b9da11","type":"VBar"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ce467c47-f6bc-4907-ba56-937c874d39fc","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4fb2b1e4-e357-4677-ab97-98150d2fb9f1","type":"Toolbar"},{"attributes":{"formatter":{"id":"cd3c7e2f-162b-4759-bef6-9e1ec0fd7fed","type":"BasicTickFormatter"},"plot":{"id":"eb1d0493-ef31-42fb-a917-ac335d823103","type":"Plot"},"ticker":{"id":"2cc15783-e36d-4d60-888c-5e46a5c3446b","type":"BasicTicker"}},"id":"e7c359ab-0ac1-4e14-92c0-5984dcd49d9d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"95f9217e-0ad3-41de-bdda-c8350c09ff26","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"eb1d0493-ef31-42fb-a917-ac335d823103","type":"Plot"},"ticker":{"id":"2cc15783-e36d-4d60-888c-5e46a5c3446b","type":"BasicTicker"}},"id":"74e5a21d-2cda-4af9-8020-dcf47b852faa","type":"Grid"},{"attributes":{},"id":"2cc15783-e36d-4d60-888c-5e46a5c3446b","type":"BasicTicker"},{"attributes":{},"id":"3353032c-93dd-4a17-82cc-7f439a86471a","type":"BasicTicker"},{"attributes":{"below":[{"id":"bea10fe6-12c8-436f-a646-7ef83b616df0","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e7c359ab-0ac1-4e14-92c0-5984dcd49d9d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ce467c47-f6bc-4907-ba56-937c874d39fc","type":"GlyphRenderer"},{"id":"bea10fe6-12c8-436f-a646-7ef83b616df0","type":"LinearAxis"},{"id":"e7c359ab-0ac1-4e14-92c0-5984dcd49d9d","type":"LinearAxis"},{"id":"0077fa92-b292-46a4-8fa8-ecf33abd9e79","type":"Grid"},{"id":"74e5a21d-2cda-4af9-8020-dcf47b852faa","type":"Grid"}],"title":null,"tool_events":{"id":"97b8b0b3-9980-4c45-b7a5-0ddba10c5a9e","type":"ToolEvents"},"toolbar":{"id":"4fb2b1e4-e357-4677-ab97-98150d2fb9f1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"95f9217e-0ad3-41de-bdda-c8350c09ff26","type":"DataRange1d"},"y_range":{"id":"b7334c09-eb0f-46fa-b1a4-f784695a8b62","type":"DataRange1d"}},"id":"eb1d0493-ef31-42fb-a917-ac335d823103","type":"Plot"},{"attributes":{"plot":{"id":"eb1d0493-ef31-42fb-a917-ac335d823103","type":"Plot"},"ticker":{"id":"3353032c-93dd-4a17-82cc-7f439a86471a","type":"BasicTicker"}},"id":"0077fa92-b292-46a4-8fa8-ecf33abd9e79","type":"Grid"},{"attributes":{"formatter":{"id":"6f25f278-9abe-4000-946a-b27e0335ce82","type":"BasicTickFormatter"},"plot":{"id":"eb1d0493-ef31-42fb-a917-ac335d823103","type":"Plot"},"ticker":{"id":"3353032c-93dd-4a17-82cc-7f439a86471a","type":"BasicTicker"}},"id":"bea10fe6-12c8-436f-a646-7ef83b616df0","type":"LinearAxis"},{"attributes":{},"id":"cd3c7e2f-162b-4759-bef6-9e1ec0fd7fed","type":"BasicTickFormatter"}],"root_ids":["eb1d0493-ef31-42fb-a917-ac335d823103"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"95df90cf-3c05-4a62-bc85-c9cb9592eeb8","elementid":"e16dfb41-8f71-491e-8027-79c95227033a","modelid":"eb1d0493-ef31-42fb-a917-ac335d823103"}];
                  
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