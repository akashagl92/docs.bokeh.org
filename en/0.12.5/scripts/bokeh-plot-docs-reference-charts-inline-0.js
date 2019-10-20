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
      };var element = document.getElementById("425218bb-5b55-4f9b-84c2-e7e98de31e36");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '425218bb-5b55-4f9b-84c2-e7e98de31e36' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"88cb13ee-5409-40e5-9719-6f5813b06da1":{"roots":{"references":[{"attributes":{"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"}},"id":"99c97c8b-00b4-4d52-ba99-c00f3189cc13","type":"HelpTool"},{"attributes":{"plot":null,"text":"Area Chart"},"id":"e4a4ca5c-da00-4560-bfe8-5b58beef003b","type":"Title"},{"attributes":{"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"}},"id":"af4f9ee0-64cc-439a-a4ba-a4d0743d4328","type":"ResetTool"},{"attributes":{},"id":"2e22f5f0-481e-4e56-9cf5-88772a4faca8","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"fcec33c2-38dc-4e63-8851-2decde329e24","type":"ColumnDataSource"},"glyph":{"id":"6bb04505-f1cd-4143-96ca-726d8c31cf7a","type":"Patches"},"hover_glyph":null,"muted_glyph":null},"id":"6b74d2b8-371b-4133-a377-d3c9022d39db","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d634b7e5-2791-421d-8152-52ee6bfdd28e","type":"ColumnDataSource"},"glyph":{"id":"6d2fc591-6b30-4ecb-855c-9557fe748970","type":"Patches"},"hover_glyph":null,"muted_glyph":null},"id":"e29ad031-5557-426f-9de4-cbea6f338775","type":"GlyphRenderer"},{"attributes":{},"id":"f114644f-66b1-4b2f-95f1-838054470ef6","type":"BasicTicker"},{"attributes":{"label":{"value":"jython"},"renderers":[{"id":"e29ad031-5557-426f-9de4-cbea6f338775","type":"GlyphRenderer"}]},"id":"20848a69-d750-496b-84be-c07914c6bab7","type":"LegendItem"},{"attributes":{"overlay":{"id":"8830d559-b842-4b4a-a9bc-311946461a93","type":"BoxAnnotation"},"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"}},"id":"c1f26af3-7046-40dd-9b36-2e457d40c634","type":"BoxZoomTool"},{"attributes":{"axis_label":"time","formatter":{"id":"7767657e-62c6-47dd-b6fd-8928debf2f2e","type":"BasicTickFormatter"},"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"},"ticker":{"id":"f114644f-66b1-4b2f-95f1-838054470ef6","type":"BasicTicker"}},"id":"5b352a89-04e1-4ccb-a3b2-1169880b9f96","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"6d2fc591-6b30-4ecb-855c-9557fe748970","type":"Patches"},{"attributes":{},"id":"b255260e-26ee-46aa-8560-4b2f3483e391","type":"ToolEvents"},{"attributes":{"items":[{"id":"20848a69-d750-496b-84be-c07914c6bab7","type":"LegendItem"},{"id":"4f8c2397-f52a-4a65-a0e7-a9fd538c4f8b","type":"LegendItem"},{"id":"378a72bb-f179-472c-bd83-4007e0e3c54d","type":"LegendItem"}],"location":"top_left","plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"}},"id":"cd5daca6-f8cb-43c0-842a-1b5ef5ce228b","type":"Legend"},{"attributes":{"axis_label":"memory","formatter":{"id":"2e22f5f0-481e-4e56-9cf5-88772a4faca8","type":"BasicTickFormatter"},"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"},"ticker":{"id":"2a5599b1-6714-482c-a1ec-99d802690f62","type":"BasicTicker"}},"id":"62620d45-dda5-4a4f-b269-885562ce0cca","type":"LinearAxis"},{"attributes":{"below":[{"id":"5b352a89-04e1-4ccb-a3b2-1169880b9f96","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"62620d45-dda5-4a4f-b269-885562ce0cca","type":"LinearAxis"}],"renderers":[{"id":"8830d559-b842-4b4a-a9bc-311946461a93","type":"BoxAnnotation"},{"id":"e29ad031-5557-426f-9de4-cbea6f338775","type":"GlyphRenderer"},{"id":"6b74d2b8-371b-4133-a377-d3c9022d39db","type":"GlyphRenderer"},{"id":"c951283b-9051-4c3b-b87b-7ecc225dbe54","type":"GlyphRenderer"},{"id":"cd5daca6-f8cb-43c0-842a-1b5ef5ce228b","type":"Legend"},{"id":"5b352a89-04e1-4ccb-a3b2-1169880b9f96","type":"LinearAxis"},{"id":"62620d45-dda5-4a4f-b269-885562ce0cca","type":"LinearAxis"},{"id":"a89d7a16-c9af-4fe3-a12e-6f509e57c0a4","type":"Grid"},{"id":"b4dc8d88-2991-4a4c-9485-e1661c188af1","type":"Grid"}],"title":{"id":"e4a4ca5c-da00-4560-bfe8-5b58beef003b","type":"Title"},"tool_events":{"id":"b255260e-26ee-46aa-8560-4b2f3483e391","type":"ToolEvents"},"toolbar":{"id":"64e8c87f-2917-4de4-9f33-7e4f072d2ce8","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"8a69d3c0-cd6c-45e1-ab20-5de49689730b","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"36a47b5e-9ace-4f69-924b-acd377740534","type":"Range1d"}},"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"end":293.7,"start":-26.700000000000003},"id":"36a47b5e-9ace-4f69-924b-acd377740534","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAA2QAAAAAAAgEVAAAAAAAAAJEAAAAAAAAA5QAAAAAAAADpAAAAAAABAWUAAAAAAAIBcQAAAAAAAYGlAAAAAAABAaEAAAAAAAOBqQAAAAAAAIGlAAAAAAABgbEAAAAAAAGBhQAAAAAAAAGRAAAAAAAAAAAA=","dtype":"float64","shape":[16]}]}},"id":"d634b7e5-2791-421d-8152-52ee6bfdd28e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"6bb04505-f1cd-4143-96ca-726d8c31cf7a","type":"Patches"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAoQAAAAAAAgEBAAAAAAACAR0AAAAAAAAAuQAAAAAAAgF9AAAAAAABAXkAAAAAAAABiQAAAAAAAIG1AAAAAAADAb0AAAAAAACBsQAAAAAAAQGxAAAAAAACwcEAAAAAAAIBbQAAAAAAAQGBAAAAAAAAAAAA=","dtype":"float64","shape":[16]}]}},"id":"fcec33c2-38dc-4e63-8851-2decde329e24","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"708d2f35-8cc6-40d9-9f53-e13e48839e99","type":"PanTool"},{"id":"f989ca69-6760-4e78-9c5b-4e95b02702ae","type":"WheelZoomTool"},{"id":"c1f26af3-7046-40dd-9b36-2e457d40c634","type":"BoxZoomTool"},{"id":"58d28942-0aa8-4fb1-ab7b-bdf7deb8ae8b","type":"SaveTool"},{"id":"af4f9ee0-64cc-439a-a4ba-a4d0743d4328","type":"ResetTool"},{"id":"99c97c8b-00b4-4d52-ba99-c00f3189cc13","type":"HelpTool"}]},"id":"64e8c87f-2917-4de4-9f33-7e4f072d2ce8","type":"Toolbar"},{"attributes":{"data_source":{"id":"21e0d945-cbf4-4a7a-a1c2-7d3d70a5f8d7","type":"ColumnDataSource"},"glyph":{"id":"44921a77-4158-4d37-879a-370a1d9cd250","type":"Patches"},"hover_glyph":null,"muted_glyph":null},"id":"c951283b-9051-4c3b-b87b-7ecc225dbe54","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"8a69d3c0-cd6c-45e1-ab20-5de49689730b","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8830d559-b842-4b4a-a9bc-311946461a93","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"}},"id":"58d28942-0aa8-4fb1-ab7b-bdf7deb8ae8b","type":"SaveTool"},{"attributes":{"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"}},"id":"708d2f35-8cc6-40d9-9f53-e13e48839e99","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"44921a77-4158-4d37-879a-370a1d9cd250","type":"Patches"},{"attributes":{"label":{"value":"pypy"},"renderers":[{"id":"6b74d2b8-371b-4133-a377-d3c9022d39db","type":"GlyphRenderer"}]},"id":"4f8c2397-f52a-4a65-a0e7-a9fd538c4f8b","type":"LegendItem"},{"attributes":{},"id":"2a5599b1-6714-482c-a1ec-99d802690f62","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"},"ticker":{"id":"2a5599b1-6714-482c-a1ec-99d802690f62","type":"BasicTicker"}},"id":"b4dc8d88-2991-4a4c-9485-e1661c188af1","type":"Grid"},{"attributes":{"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"},"ticker":{"id":"f114644f-66b1-4b2f-95f1-838054470ef6","type":"BasicTicker"}},"id":"a89d7a16-c9af-4fe3-a12e-6f509e57c0a4","type":"Grid"},{"attributes":{"plot":{"id":"78045c13-1fa7-46aa-a3ce-53068872b9af","subtype":"Chart","type":"Plot"}},"id":"f989ca69-6760-4e78-9c5b-4e95b02702ae","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAQAAAAAAAAAhAAAAAAAAAHEAAAAAAAAAUQAAAAAAAADpAAAAAAACga0AAAAAAAABGQAAAAAAAIG1AAAAAAADAb0AAAAAAAJBwQAAAAAAAoHBAAAAAAACwcEAAAAAAAABeQAAAAAAAwFtAAAAAAAAAAAA=","dtype":"float64","shape":[16]}]}},"id":"21e0d945-cbf4-4a7a-a1c2-7d3d70a5f8d7","type":"ColumnDataSource"},{"attributes":{},"id":"7767657e-62c6-47dd-b6fd-8928debf2f2e","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"python"},"renderers":[{"id":"c951283b-9051-4c3b-b87b-7ecc225dbe54","type":"GlyphRenderer"}]},"id":"378a72bb-f179-472c-bd83-4007e0e3c54d","type":"LegendItem"}],"root_ids":["78045c13-1fa7-46aa-a3ce-53068872b9af"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"88cb13ee-5409-40e5-9719-6f5813b06da1","elementid":"425218bb-5b55-4f9b-84c2-e7e98de31e36","modelid":"78045c13-1fa7-46aa-a3ce-53068872b9af"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
