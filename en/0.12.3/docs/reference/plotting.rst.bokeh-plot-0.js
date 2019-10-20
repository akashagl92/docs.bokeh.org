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
      };var element = document.getElementById("de5851ff-6f1c-432e-b35c-361e8d51d20a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'de5851ff-6f1c-432e-b35c-361e8d51d20a' but no matching script tag was found. ")
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
                  var docs_json = {"3e6ebf07-db11-4053-ba85-0e57606a89b7":{"roots":{"references":[{"attributes":{"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"}},"id":"87375b94-e846-48f1-84a4-993bc8f5e489","type":"HelpTool"},{"attributes":{},"id":"d66a8746-4891-4c39-9cb4-c6058556d51a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"2158ce06-8572-4c06-8da0-d4a03598ec24","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"810f5106-9a82-470b-9609-8f90ca6420d1","type":"BasicTickFormatter"},"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5bc1a6e1-2b43-4658-96a5-031ad845453e","type":"BasicTicker"}},"id":"3b0d27ae-e3ba-4318-ac27-280c44c3fbdc","type":"LinearAxis"},{"attributes":{"below":[{"id":"3b0d27ae-e3ba-4318-ac27-280c44c3fbdc","type":"LinearAxis"}],"left":[{"id":"ae91f9bc-9b7f-4b64-a908-76566376049f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3b0d27ae-e3ba-4318-ac27-280c44c3fbdc","type":"LinearAxis"},{"id":"ab2d9885-f3db-4b46-9910-6a6473beb4e7","type":"Grid"},{"id":"ae91f9bc-9b7f-4b64-a908-76566376049f","type":"LinearAxis"},{"id":"dfd56437-6c86-4a9c-a1ca-94adeffaf693","type":"Grid"},{"id":"ca4af15c-c3cb-42c0-b559-58df72d72dd5","type":"BoxAnnotation"},{"id":"f253c84a-533d-4965-ab24-9b612b1397db","type":"GlyphRenderer"}],"title":{"id":"24281032-a9a6-4bfd-b7f0-83c87983fd9e","type":"Title"},"tool_events":{"id":"43c369bc-28c8-40ed-ac71-b9733aabb0dd","type":"ToolEvents"},"toolbar":{"id":"f1dc2764-6c04-4b33-8748-c2de9397381f","type":"Toolbar"},"x_range":{"id":"6f0f3a65-5c78-4565-b787-6096c663f3ad","type":"DataRange1d"},"y_range":{"id":"e40ae27a-3e13-41c1-bdfc-16dd26dacebd","type":"DataRange1d"}},"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"43c369bc-28c8-40ed-ac71-b9733aabb0dd","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c08de0a-7881-4989-bd79-9f1440148112","type":"Annulus"},{"attributes":{"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"}},"id":"b69daf95-c8df-458d-8c21-998aaf9e55a6","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"24281032-a9a6-4bfd-b7f0-83c87983fd9e","type":"Title"},{"attributes":{"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"}},"id":"fdda1353-4527-42e1-afc6-fd0a05f578b4","type":"PanTool"},{"attributes":{"data_source":{"id":"2158ce06-8572-4c06-8da0-d4a03598ec24","type":"ColumnDataSource"},"glyph":{"id":"6c08de0a-7881-4989-bd79-9f1440148112","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":{"id":"23516eca-03dc-4071-9b2b-7279bb26541e","type":"Annulus"},"selection_glyph":null},"id":"f253c84a-533d-4965-ab24-9b612b1397db","type":"GlyphRenderer"},{"attributes":{},"id":"810f5106-9a82-470b-9609-8f90ca6420d1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"bfd15c74-f52d-4cfc-b40c-1d46a68a3b06","type":"BasicTickFormatter"},"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d66a8746-4891-4c39-9cb4-c6058556d51a","type":"BasicTicker"}},"id":"ae91f9bc-9b7f-4b64-a908-76566376049f","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ca4af15c-c3cb-42c0-b559-58df72d72dd5","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"23516eca-03dc-4071-9b2b-7279bb26541e","type":"Annulus"},{"attributes":{"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"}},"id":"280517cb-f081-4791-8800-d0c8c3b2e96f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"e40ae27a-3e13-41c1-bdfc-16dd26dacebd","type":"DataRange1d"},{"attributes":{},"id":"bfd15c74-f52d-4cfc-b40c-1d46a68a3b06","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6f0f3a65-5c78-4565-b787-6096c663f3ad","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fdda1353-4527-42e1-afc6-fd0a05f578b4","type":"PanTool"},{"id":"280517cb-f081-4791-8800-d0c8c3b2e96f","type":"WheelZoomTool"},{"id":"6fb4ec66-0bd5-4427-95d1-636826f55a95","type":"BoxZoomTool"},{"id":"c56098ca-50d2-4213-befe-102275f626ff","type":"SaveTool"},{"id":"b69daf95-c8df-458d-8c21-998aaf9e55a6","type":"ResetTool"},{"id":"87375b94-e846-48f1-84a4-993bc8f5e489","type":"HelpTool"}]},"id":"f1dc2764-6c04-4b33-8748-c2de9397381f","type":"Toolbar"},{"attributes":{},"id":"5bc1a6e1-2b43-4658-96a5-031ad845453e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d66a8746-4891-4c39-9cb4-c6058556d51a","type":"BasicTicker"}},"id":"dfd56437-6c86-4a9c-a1ca-94adeffaf693","type":"Grid"},{"attributes":{"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"}},"id":"c56098ca-50d2-4213-befe-102275f626ff","type":"SaveTool"},{"attributes":{"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5bc1a6e1-2b43-4658-96a5-031ad845453e","type":"BasicTicker"}},"id":"ab2d9885-f3db-4b46-9910-6a6473beb4e7","type":"Grid"},{"attributes":{"overlay":{"id":"ca4af15c-c3cb-42c0-b559-58df72d72dd5","type":"BoxAnnotation"},"plot":{"id":"b6bfc961-a986-43ee-ae77-090921a919d1","subtype":"Figure","type":"Plot"}},"id":"6fb4ec66-0bd5-4427-95d1-636826f55a95","type":"BoxZoomTool"}],"root_ids":["b6bfc961-a986-43ee-ae77-090921a919d1"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"3e6ebf07-db11-4053-ba85-0e57606a89b7","elementid":"de5851ff-6f1c-432e-b35c-361e8d51d20a","modelid":"b6bfc961-a986-43ee-ae77-090921a919d1"}];
                  
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