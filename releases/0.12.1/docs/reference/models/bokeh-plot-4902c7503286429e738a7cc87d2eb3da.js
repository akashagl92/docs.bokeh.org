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
      };var element = document.getElementById("aa416810-413e-41eb-8cf7-f83064478d0c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa416810-413e-41eb-8cf7-f83064478d0c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"11d90ab1-0d48-49a9-9b06-fc878e1db9c3":{"roots":{"references":[{"attributes":{},"id":"70c26d3c-a75c-4591-b332-16c2ddb8732f","type":"ToolEvents"},{"attributes":{"formatter":{"id":"c59e71d5-1f9c-4077-ad57-237222c19803","type":"BasicTickFormatter"},"plot":{"id":"832695f5-d71c-4bf8-9103-c038b00fe765","type":"Plot"},"ticker":{"id":"e182c007-e198-4392-9b20-337b48eebbf2","type":"BasicTicker"}},"id":"991986fa-e695-400c-9627-4a611ee50cf7","type":"LinearAxis"},{"attributes":{"data_source":{"id":"03be0ba4-12fa-4d33-a3e1-66ef4fd93d3d","type":"ColumnDataSource"},"glyph":{"id":"2a3a346f-9cf0-41da-bd4c-b560eda2125b","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aacbb5e9-4e22-42cb-ad63-cc909e66675a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"03be0ba4-12fa-4d33-a3e1-66ef4fd93d3d","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"aa1d0b5b-1f1e-43fc-b0dc-97bc6a5ba315","type":"DataRange1d"},{"attributes":{},"id":"c59e71d5-1f9c-4077-ad57-237222c19803","type":"BasicTickFormatter"},{"attributes":{},"id":"c0c6d65c-c829-4da0-9a30-3cf85736dfd7","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"991986fa-e695-400c-9627-4a611ee50cf7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"57ebf7dc-1a51-4b67-b600-35d54a3a55a5","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"aacbb5e9-4e22-42cb-ad63-cc909e66675a","type":"GlyphRenderer"},{"id":"991986fa-e695-400c-9627-4a611ee50cf7","type":"LinearAxis"},{"id":"57ebf7dc-1a51-4b67-b600-35d54a3a55a5","type":"LinearAxis"},{"id":"027f4215-6f5c-4a38-94ff-4db8f5c7b5cd","type":"Grid"},{"id":"6cf23a57-1276-43b0-837e-189f391d8237","type":"Grid"}],"title":null,"tool_events":{"id":"70c26d3c-a75c-4591-b332-16c2ddb8732f","type":"ToolEvents"},"toolbar":{"id":"f8e640b0-9dbc-4197-8e38-ccefacb1e98d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"aa1d0b5b-1f1e-43fc-b0dc-97bc6a5ba315","type":"DataRange1d"},"y_range":{"id":"08e06301-eeb5-43f8-a32e-811201985b4d","type":"DataRange1d"}},"id":"832695f5-d71c-4bf8-9103-c038b00fe765","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"832695f5-d71c-4bf8-9103-c038b00fe765","type":"Plot"},"ticker":{"id":"7d8681fa-fc8f-4d35-91d2-2a3c3c857e63","type":"BasicTicker"}},"id":"6cf23a57-1276-43b0-837e-189f391d8237","type":"Grid"},{"attributes":{},"id":"7d8681fa-fc8f-4d35-91d2-2a3c3c857e63","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c0c6d65c-c829-4da0-9a30-3cf85736dfd7","type":"BasicTickFormatter"},"plot":{"id":"832695f5-d71c-4bf8-9103-c038b00fe765","type":"Plot"},"ticker":{"id":"7d8681fa-fc8f-4d35-91d2-2a3c3c857e63","type":"BasicTicker"}},"id":"57ebf7dc-1a51-4b67-b600-35d54a3a55a5","type":"LinearAxis"},{"attributes":{},"id":"e182c007-e198-4392-9b20-337b48eebbf2","type":"BasicTicker"},{"attributes":{"plot":{"id":"832695f5-d71c-4bf8-9103-c038b00fe765","type":"Plot"},"ticker":{"id":"e182c007-e198-4392-9b20-337b48eebbf2","type":"BasicTicker"}},"id":"027f4215-6f5c-4a38-94ff-4db8f5c7b5cd","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a3a346f-9cf0-41da-bd4c-b560eda2125b","type":"SquareCross"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f8e640b0-9dbc-4197-8e38-ccefacb1e98d","type":"Toolbar"},{"attributes":{"callback":null},"id":"08e06301-eeb5-43f8-a32e-811201985b4d","type":"DataRange1d"}],"root_ids":["832695f5-d71c-4bf8-9103-c038b00fe765"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"11d90ab1-0d48-49a9-9b06-fc878e1db9c3","elementid":"aa416810-413e-41eb-8cf7-f83064478d0c","modelid":"832695f5-d71c-4bf8-9103-c038b00fe765"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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