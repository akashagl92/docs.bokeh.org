(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("b9ad8bf9-2976-4a47-9745-5b0140b52aba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9ad8bf9-2976-4a47-9745-5b0140b52aba' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"b337aac9-162c-4896-abfc-0a4d16a91729":{"roots":{"references":[{"attributes":{},"id":"e4dd1331-a9da-42ab-8f59-ea42cfb792b1","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a77403b3-9321-4b74-913d-2901f618300e","type":"ColumnDataSource"},"glyph":{"id":"c164c433-33cc-4496-803a-b335dbce8d33","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"5343cd2c-38c7-4469-af2f-c8b624beed71","type":"Patch"},"selection_glyph":null},"id":"92d91782-9bd4-48b5-8893-d970b6cecd28","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"}},"id":"fa031467-1a59-49e6-8d12-ab33ab908da7","type":"HelpTool"},{"attributes":{"callback":null},"id":"646081ee-ad0b-4ef8-8618-1c030cc914cb","type":"DataRange1d"},{"attributes":{},"id":"c0fe7fdd-ca9d-41b6-bc2f-3f1abb933c13","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5343cd2c-38c7-4469-af2f-c8b624beed71","type":"Patch"},{"attributes":{"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"}},"id":"7120b9e8-8854-4abe-96be-2623c1bd0fd4","type":"ResetTool"},{"attributes":{"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"}},"id":"56f78586-8720-4e58-8136-8d1fc8dd2b9f","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4a1a3379-0aab-4780-bf64-2c7f4c8a231b","type":"PanTool"},{"id":"56f78586-8720-4e58-8136-8d1fc8dd2b9f","type":"WheelZoomTool"},{"id":"a5116917-9293-4dd9-835d-ac425ef465e1","type":"BoxZoomTool"},{"id":"047dca0b-50fb-4e1c-bd41-3ef5cc1d9fad","type":"SaveTool"},{"id":"7120b9e8-8854-4abe-96be-2623c1bd0fd4","type":"ResetTool"},{"id":"fa031467-1a59-49e6-8d12-ab33ab908da7","type":"HelpTool"}]},"id":"d47a108a-b6a6-479a-a9da-7992fba48163","type":"Toolbar"},{"attributes":{},"id":"9838d3ad-afe8-4778-8ef0-59a1cedc0b56","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b7303c29-b039-4582-a386-54a1d9050b4d","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"dc7f3af9-e18c-4cde-af5a-7462ef6d9d38","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c164c433-33cc-4496-803a-b335dbce8d33","type":"Patch"},{"attributes":{"formatter":{"id":"c0fe7fdd-ca9d-41b6-bc2f-3f1abb933c13","type":"BasicTickFormatter"},"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4dd1331-a9da-42ab-8f59-ea42cfb792b1","type":"BasicTicker"}},"id":"824053ad-1bc6-4dc0-93ba-d00a2f96901b","type":"LinearAxis"},{"attributes":{},"id":"aa7168ac-43ff-46db-b16f-7bc1f2dfd4cd","type":"ToolEvents"},{"attributes":{"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"}},"id":"047dca0b-50fb-4e1c-bd41-3ef5cc1d9fad","type":"SaveTool"},{"attributes":{"overlay":{"id":"b7303c29-b039-4582-a386-54a1d9050b4d","type":"BoxAnnotation"},"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"}},"id":"a5116917-9293-4dd9-835d-ac425ef465e1","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ea2a2d5-f31b-46a7-9008-1c5f0576b471","type":"BasicTicker"}},"id":"7693f9d9-0f85-46c1-8d3f-ec8043c6e36d","type":"Grid"},{"attributes":{},"id":"1ea2a2d5-f31b-46a7-9008-1c5f0576b471","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]}},"id":"a77403b3-9321-4b74-913d-2901f618300e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4dd1331-a9da-42ab-8f59-ea42cfb792b1","type":"BasicTicker"}},"id":"a5d4cfcf-c5d7-4c7c-9bbc-47f7ce6973b2","type":"Grid"},{"attributes":{"formatter":{"id":"9838d3ad-afe8-4778-8ef0-59a1cedc0b56","type":"BasicTickFormatter"},"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ea2a2d5-f31b-46a7-9008-1c5f0576b471","type":"BasicTicker"}},"id":"1cb4836b-a6cd-497f-bdc9-b69d8453a634","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"294aaf8f-e534-4394-8a11-4b7d88196cb0","type":"Title"},{"attributes":{"below":[{"id":"824053ad-1bc6-4dc0-93ba-d00a2f96901b","type":"LinearAxis"}],"left":[{"id":"1cb4836b-a6cd-497f-bdc9-b69d8453a634","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"824053ad-1bc6-4dc0-93ba-d00a2f96901b","type":"LinearAxis"},{"id":"a5d4cfcf-c5d7-4c7c-9bbc-47f7ce6973b2","type":"Grid"},{"id":"1cb4836b-a6cd-497f-bdc9-b69d8453a634","type":"LinearAxis"},{"id":"7693f9d9-0f85-46c1-8d3f-ec8043c6e36d","type":"Grid"},{"id":"b7303c29-b039-4582-a386-54a1d9050b4d","type":"BoxAnnotation"},{"id":"92d91782-9bd4-48b5-8893-d970b6cecd28","type":"GlyphRenderer"}],"title":{"id":"294aaf8f-e534-4394-8a11-4b7d88196cb0","type":"Title"},"tool_events":{"id":"aa7168ac-43ff-46db-b16f-7bc1f2dfd4cd","type":"ToolEvents"},"toolbar":{"id":"d47a108a-b6a6-479a-a9da-7992fba48163","type":"Toolbar"},"x_range":{"id":"646081ee-ad0b-4ef8-8618-1c030cc914cb","type":"DataRange1d"},"y_range":{"id":"dc7f3af9-e18c-4cde-af5a-7462ef6d9d38","type":"DataRange1d"}},"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"424056ba-028d-48d3-8fba-6ec2b0b06386","subtype":"Figure","type":"Plot"}},"id":"4a1a3379-0aab-4780-bf64-2c7f4c8a231b","type":"PanTool"}],"root_ids":["424056ba-028d-48d3-8fba-6ec2b0b06386"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"b337aac9-162c-4896-abfc-0a4d16a91729","elementid":"b9ad8bf9-2976-4a47-9745-5b0140b52aba","modelid":"424056ba-028d-48d3-8fba-6ec2b0b06386"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
