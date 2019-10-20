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
      };var element = document.getElementById("f1442bee-65f4-410b-b258-8b5d04485129");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f1442bee-65f4-410b-b258-8b5d04485129' but no matching script tag was found. ")
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
                  var docs_json = {"c362ed17-1774-47b6-ac2b-3461f7ddd0fa":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cfdcb839-4bbe-4bee-ac30-3cf9cb8cd6ff","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"}},"id":"bc0dbaee-e3a0-4df3-a66e-1e8db91d6f4e","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2783475-3785-4377-acad-ece31fdc06db","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"},"ticker":{"id":"fddced08-99ab-44cd-b771-819193ae8091","type":"BasicTicker"}},"id":"aed75a45-72c4-4517-af6a-dda724587862","type":"Grid"},{"attributes":{"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"},"ticker":{"id":"0516287a-8107-4ba5-a294-eb80d0f2c499","type":"BasicTicker"}},"id":"22f83156-2d04-4542-affe-5db99351d3c8","type":"Grid"},{"attributes":{"data_source":{"id":"b7e84a81-27f6-449e-8312-532991242b3e","type":"ColumnDataSource"},"glyph":{"id":"e2783475-3785-4377-acad-ece31fdc06db","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"6aa9b8d7-2d72-4ba8-b62d-da16462ad3a0","type":"Square"},"selection_glyph":null},"id":"6a3a996b-8929-46e6-b324-424ef87c872e","type":"GlyphRenderer"},{"attributes":{},"id":"0516287a-8107-4ba5-a294-eb80d0f2c499","type":"BasicTicker"},{"attributes":{"formatter":{"id":"762b6694-c1df-4c79-a839-6171837a15e6","type":"BasicTickFormatter"},"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"},"ticker":{"id":"0516287a-8107-4ba5-a294-eb80d0f2c499","type":"BasicTicker"}},"id":"25d8a89a-9cdf-40e6-8676-04c88ae19c71","type":"LinearAxis"},{"attributes":{},"id":"fddced08-99ab-44cd-b771-819193ae8091","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b8a3a2b0-5765-42b5-9139-e989cc274a0e","type":"DataRange1d"},{"attributes":{"callback":null},"id":"2e21067d-46bc-4c92-b2cf-a0ccbdc01532","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6aa9b8d7-2d72-4ba8-b62d-da16462ad3a0","type":"Square"},{"attributes":{"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"}},"id":"f1a15ca4-3b63-4f4c-9afd-ce20d15213cc","type":"HelpTool"},{"attributes":{"overlay":{"id":"cfdcb839-4bbe-4bee-ac30-3cf9cb8cd6ff","type":"BoxAnnotation"},"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"}},"id":"172e1704-a2ab-4322-9a1d-250926152707","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"25d8a89a-9cdf-40e6-8676-04c88ae19c71","type":"LinearAxis"}],"left":[{"id":"3c58efe1-2a85-4e21-b442-e85c0a6c9eb2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"25d8a89a-9cdf-40e6-8676-04c88ae19c71","type":"LinearAxis"},{"id":"22f83156-2d04-4542-affe-5db99351d3c8","type":"Grid"},{"id":"3c58efe1-2a85-4e21-b442-e85c0a6c9eb2","type":"LinearAxis"},{"id":"aed75a45-72c4-4517-af6a-dda724587862","type":"Grid"},{"id":"cfdcb839-4bbe-4bee-ac30-3cf9cb8cd6ff","type":"BoxAnnotation"},{"id":"6a3a996b-8929-46e6-b324-424ef87c872e","type":"GlyphRenderer"}],"title":{"id":"5096e1a1-a175-417d-8270-d164eb39a042","type":"Title"},"tool_events":{"id":"a6c375b9-78b6-41b3-a750-030167cf5c69","type":"ToolEvents"},"toolbar":{"id":"34059b88-78c0-4042-8dda-6cce2899f553","type":"Toolbar"},"x_range":{"id":"b8a3a2b0-5765-42b5-9139-e989cc274a0e","type":"DataRange1d"},"y_range":{"id":"2e21067d-46bc-4c92-b2cf-a0ccbdc01532","type":"DataRange1d"}},"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"}},"id":"ca154db0-4711-49a2-a0c4-0b0050c98707","type":"ResetTool"},{"attributes":{},"id":"a6c375b9-78b6-41b3-a750-030167cf5c69","type":"ToolEvents"},{"attributes":{},"id":"30f71a36-ebb2-43f5-8cc8-6c28cef42fbd","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"b7e84a81-27f6-449e-8312-532991242b3e","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"5096e1a1-a175-417d-8270-d164eb39a042","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"37b7f1de-b327-42c8-920b-e6ad4a2699ee","type":"PanTool"},{"id":"7ae78e65-32f8-45a6-9fb1-7136a87f93f4","type":"WheelZoomTool"},{"id":"172e1704-a2ab-4322-9a1d-250926152707","type":"BoxZoomTool"},{"id":"bc0dbaee-e3a0-4df3-a66e-1e8db91d6f4e","type":"SaveTool"},{"id":"ca154db0-4711-49a2-a0c4-0b0050c98707","type":"ResetTool"},{"id":"f1a15ca4-3b63-4f4c-9afd-ce20d15213cc","type":"HelpTool"}]},"id":"34059b88-78c0-4042-8dda-6cce2899f553","type":"Toolbar"},{"attributes":{"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"}},"id":"7ae78e65-32f8-45a6-9fb1-7136a87f93f4","type":"WheelZoomTool"},{"attributes":{},"id":"762b6694-c1df-4c79-a839-6171837a15e6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"}},"id":"37b7f1de-b327-42c8-920b-e6ad4a2699ee","type":"PanTool"},{"attributes":{"formatter":{"id":"30f71a36-ebb2-43f5-8cc8-6c28cef42fbd","type":"BasicTickFormatter"},"plot":{"id":"963c9bd7-8272-4912-834b-4b44f1cf1d66","subtype":"Figure","type":"Plot"},"ticker":{"id":"fddced08-99ab-44cd-b771-819193ae8091","type":"BasicTicker"}},"id":"3c58efe1-2a85-4e21-b442-e85c0a6c9eb2","type":"LinearAxis"}],"root_ids":["963c9bd7-8272-4912-834b-4b44f1cf1d66"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"c362ed17-1774-47b6-ac2b-3461f7ddd0fa","elementid":"f1442bee-65f4-410b-b258-8b5d04485129","modelid":"963c9bd7-8272-4912-834b-4b44f1cf1d66"}];
                  
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