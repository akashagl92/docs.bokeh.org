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
      };var element = document.getElementById("d8ffab63-2e85-4697-9f81-36802ca7967a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd8ffab63-2e85-4697-9f81-36802ca7967a' but no matching script tag was found. ")
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
                  var docs_json = {"02628635-59aa-4df7-8b36-e15ad7957bac":{"roots":{"references":[{"attributes":{"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3bb007a-9629-48c5-86ae-ee64a574aca2","type":"BasicTicker"}},"id":"20e41889-55ec-4264-b525-8ae2b579e9ed","type":"Grid"},{"attributes":{"formatter":{"id":"4fa3863b-71d5-4c30-86e7-9216518b3e75","type":"BasicTickFormatter"},"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"},"ticker":{"id":"75eb2782-eaed-4c56-8170-d0b5c650df98","type":"BasicTicker"}},"id":"8eef466d-f487-47c4-8128-110a20af2cac","type":"LinearAxis"},{"attributes":{},"id":"e3bb007a-9629-48c5-86ae-ee64a574aca2","type":"BasicTicker"},{"attributes":{"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"}},"id":"4ce0e2df-fe7c-438f-b2d1-ebcb1c3effd1","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"f3cf1df4-978b-47ba-9e77-4c242716975d","type":"DataRange1d"},{"attributes":{},"id":"4fa3863b-71d5-4c30-86e7-9216518b3e75","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"},"ticker":{"id":"75eb2782-eaed-4c56-8170-d0b5c650df98","type":"BasicTicker"}},"id":"dc4c8cf1-44eb-48bf-8881-6c54d38384fb","type":"Grid"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ae0d621-a01b-414a-8ccc-e26f911d5f88","type":"Diamond"},{"attributes":{"overlay":{"id":"6526b585-51de-4d9e-9b47-340620b207b2","type":"BoxAnnotation"},"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"}},"id":"365b4102-6146-4c2f-b79b-334f34b274d5","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"02aadbe8-e4f5-4e50-8b68-ef92933cebec","type":"ColumnDataSource"},"glyph":{"id":"4ae0d621-a01b-414a-8ccc-e26f911d5f88","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":{"id":"16d40a75-8aaf-4fe7-80fb-ed1516149bbf","type":"Diamond"},"selection_glyph":null},"id":"b37816b5-2d18-4829-9874-a980d987f6fb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"}},"id":"ab9f2d9d-19b9-41a6-8ee1-1ab32ec38d4d","type":"SaveTool"},{"attributes":{"formatter":{"id":"8150a5ea-995a-4729-9c72-8cfb991bbe6c","type":"BasicTickFormatter"},"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3bb007a-9629-48c5-86ae-ee64a574aca2","type":"BasicTicker"}},"id":"dc282c1d-20e6-49f5-bb2f-8d009d8453da","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6526b585-51de-4d9e-9b47-340620b207b2","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":null},"id":"5f312bfa-4ac0-40f1-aa1f-ee5633612059","type":"Title"},{"attributes":{"below":[{"id":"dc282c1d-20e6-49f5-bb2f-8d009d8453da","type":"LinearAxis"}],"left":[{"id":"8eef466d-f487-47c4-8128-110a20af2cac","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"dc282c1d-20e6-49f5-bb2f-8d009d8453da","type":"LinearAxis"},{"id":"20e41889-55ec-4264-b525-8ae2b579e9ed","type":"Grid"},{"id":"8eef466d-f487-47c4-8128-110a20af2cac","type":"LinearAxis"},{"id":"dc4c8cf1-44eb-48bf-8881-6c54d38384fb","type":"Grid"},{"id":"6526b585-51de-4d9e-9b47-340620b207b2","type":"BoxAnnotation"},{"id":"b37816b5-2d18-4829-9874-a980d987f6fb","type":"GlyphRenderer"}],"title":{"id":"5f312bfa-4ac0-40f1-aa1f-ee5633612059","type":"Title"},"tool_events":{"id":"fbeccbaf-87d0-4a38-bf13-6a6591f650eb","type":"ToolEvents"},"toolbar":{"id":"4b24a1a4-eb3d-4e5d-9905-ac4e59125414","type":"Toolbar"},"x_range":{"id":"55895732-3802-46db-9659-ef5c199346be","type":"DataRange1d"},"y_range":{"id":"f3cf1df4-978b-47ba-9e77-4c242716975d","type":"DataRange1d"}},"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"55895732-3802-46db-9659-ef5c199346be","type":"DataRange1d"},{"attributes":{"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"}},"id":"f97cf036-4d6c-4309-aa0f-66d10595d10e","type":"PanTool"},{"attributes":{},"id":"75eb2782-eaed-4c56-8170-d0b5c650df98","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"16d40a75-8aaf-4fe7-80fb-ed1516149bbf","type":"Diamond"},{"attributes":{"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"}},"id":"d8daa96b-a798-4ab2-8608-af53e49e103e","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f97cf036-4d6c-4309-aa0f-66d10595d10e","type":"PanTool"},{"id":"4ce0e2df-fe7c-438f-b2d1-ebcb1c3effd1","type":"WheelZoomTool"},{"id":"365b4102-6146-4c2f-b79b-334f34b274d5","type":"BoxZoomTool"},{"id":"ab9f2d9d-19b9-41a6-8ee1-1ab32ec38d4d","type":"SaveTool"},{"id":"d0864607-8895-4178-8137-95cbecc64fd1","type":"ResetTool"},{"id":"d8daa96b-a798-4ab2-8608-af53e49e103e","type":"HelpTool"}]},"id":"4b24a1a4-eb3d-4e5d-9905-ac4e59125414","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"02aadbe8-e4f5-4e50-8b68-ef92933cebec","type":"ColumnDataSource"},{"attributes":{},"id":"fbeccbaf-87d0-4a38-bf13-6a6591f650eb","type":"ToolEvents"},{"attributes":{},"id":"8150a5ea-995a-4729-9c72-8cfb991bbe6c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6bba439f-dd7b-4938-831b-676a21b16c66","subtype":"Figure","type":"Plot"}},"id":"d0864607-8895-4178-8137-95cbecc64fd1","type":"ResetTool"}],"root_ids":["6bba439f-dd7b-4938-831b-676a21b16c66"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"02628635-59aa-4df7-8b36-e15ad7957bac","elementid":"d8ffab63-2e85-4697-9f81-36802ca7967a","modelid":"6bba439f-dd7b-4938-831b-676a21b16c66"}];
                  
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