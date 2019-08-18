(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("31a61879-2961-497d-9667-47db221f36c5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '31a61879-2961-497d-9667-47db221f36c5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"cc933c2c-a6f9-41f4-a4fd-a16fa7ddfc75":{"roots":{"references":[{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"34ff1bab-eab2-4e76-831c-e5b10ae69e98","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6d8c71e3-ea69-4581-b503-3dfcd0df9270","type":"BoxSelectTool"},{"id":"717a2351-9ae8-40f0-b68e-6cce11ea66cf","type":"LassoSelectTool"},{"id":"dfff574c-bc87-4413-9b66-6b8a94ef74b7","type":"HoverTool"},{"id":"04232274-ec02-450d-9627-1a4f000dd734","type":"HelpTool"}]},"id":"9af68676-56a1-45a8-9396-162c7419aff3","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"ef9b2a19-cb62-4aff-832e-0a3b48881070","subtype":"Figure","type":"Plot"},"ticker":{"id":"12350f7a-eb46-443f-b24a-fbae776c7e77","type":"BasicTicker"}},"id":"2faa9d73-a0a9-4ebf-b3b9-a282d0cd2620","type":"Grid"},{"attributes":{},"id":"15053fce-5881-40b6-a529-4a33dc8b3fd1","type":"BasicTicker"},{"attributes":{"children":[{"id":"baa2aa43-656d-44f9-a1e1-3450a2f5e8d1","type":"ToolbarBox"},{"id":"decee2fc-01f1-4fd5-83c5-e55186bc5e90","type":"Column"}]},"id":"02fd9c74-9892-4bda-9b56-51adc92536bf","type":"Column"},{"attributes":{},"id":"287321a3-fe23-4dde-8626-618998ffc511","type":"BasicTicker"},{"attributes":{"formatter":{"id":"62428211-91de-469b-8c0f-5bf4d24f41de","type":"BasicTickFormatter"},"plot":{"id":"b294806d-8baf-4639-b131-5fa348c60b5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"15053fce-5881-40b6-a529-4a33dc8b3fd1","type":"BasicTicker"}},"id":"631d8ed4-61f9-430b-b1c4-c500536c7837","type":"LinearAxis"},{"attributes":{"below":[{"id":"ffaa01cd-0c0f-46b5-bd06-47c8e185c0d6","type":"LinearAxis"}],"left":[{"id":"631d8ed4-61f9-430b-b1c4-c500536c7837","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ffaa01cd-0c0f-46b5-bd06-47c8e185c0d6","type":"LinearAxis"},{"id":"a8105924-a076-43c6-afb9-9a40b7760c82","type":"Grid"},{"id":"631d8ed4-61f9-430b-b1c4-c500536c7837","type":"LinearAxis"},{"id":"ceb5d202-8f45-4e26-b488-6ce2b74c5726","type":"Grid"},{"id":"62575670-89c5-4d26-8dc2-6a63ea380650","type":"BoxAnnotation"},{"id":"a86569f9-9ffe-48f0-8eac-ba8bc54077b9","type":"PolyAnnotation"},{"id":"0ae88458-5765-4ca9-819c-d9facab78473","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9af68676-56a1-45a8-9396-162c7419aff3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4e638f5e-fcb8-4ad3-a3c9-55c993f2632b","type":"DataRange1d"},"x_scale":{"id":"39f9bb11-8ecb-4934-b66d-5f602e7a8f41","type":"LinearScale"},"y_range":{"id":"436590d4-ab36-4ea3-a1b4-bfea5fe2875f","type":"DataRange1d"},"y_scale":{"id":"23265723-65c0-4884-997d-64a3d7be22e2","type":"LinearScale"}},"id":"b294806d-8baf-4639-b131-5fa348c60b5a","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"f26f144c-5228-4fe6-9b3e-1fabfe38c823","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"c79af79e-f97a-426c-930e-41a01ced2c5d","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"f26f144c-5228-4fe6-9b3e-1fabfe38c823","type":"PolyAnnotation"}},"id":"7a0b8f87-c850-4a56-8c76-f748bc1a23b8","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"dfff574c-bc87-4413-9b66-6b8a94ef74b7","type":"HoverTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"2793be6a-043a-4096-bd70-5875dda769e3","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"93b3f328-4012-4f9e-aed4-b54658c87328","type":"Circle"},{"attributes":{"below":[{"id":"e9a87ddb-45ef-4c61-b422-29539e5a4507","type":"LinearAxis"}],"left":[{"id":"32851d74-1a71-4fd1-88a7-d1fbf7aae28a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e9a87ddb-45ef-4c61-b422-29539e5a4507","type":"LinearAxis"},{"id":"8d903ce2-ad6d-427b-ad37-bc18e9daa0cc","type":"Grid"},{"id":"32851d74-1a71-4fd1-88a7-d1fbf7aae28a","type":"LinearAxis"},{"id":"2faa9d73-a0a9-4ebf-b3b9-a282d0cd2620","type":"Grid"},{"id":"82b5ab00-0c51-4edd-a9ef-68dad1b42db8","type":"BoxAnnotation"},{"id":"f26f144c-5228-4fe6-9b3e-1fabfe38c823","type":"PolyAnnotation"},{"id":"a77d0e39-2474-4a19-b195-682fa4b7016b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"5b706ae1-a913-476c-94b5-cdf5adecd2de","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0d6f469d-ce1d-4e3e-acf2-46c3913e5dbf","type":"DataRange1d"},"x_scale":{"id":"9141dd16-1156-4c16-bc44-cdc553dc3473","type":"LinearScale"},"y_range":{"id":"e9cf7b84-b16d-4d90-b6ac-1c4c05d5c44e","type":"DataRange1d"},"y_scale":{"id":"bc374746-cf41-4a2f-8ae6-1975b6a2c11e","type":"LinearScale"}},"id":"ef9b2a19-cb62-4aff-832e-0a3b48881070","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"fde5672b-5f58-47e3-8185-a9c34d2c75ed","type":"ColumnDataSource"},"glyph":{"id":"bfa8523a-e295-48f5-b079-050b88e15d61","type":"Circle"},"hover_glyph":{"id":"2793be6a-043a-4096-bd70-5875dda769e3","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"c19432bd-9372-4be0-a455-4c2fecf43c89","type":"Circle"},"selection_glyph":null,"view":{"id":"913ccb2b-8daa-455c-a7c8-66c051de2b1c","type":"CDSView"}},"id":"0ae88458-5765-4ca9-819c-d9facab78473","type":"GlyphRenderer"},{"attributes":{},"id":"074fbbd3-c11e-48b1-8f9c-c80277568528","type":"BasicTickFormatter"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"6a0dbda9-eded-48c7-aa56-1ec04e765656","type":"BooleanFilter"},{"attributes":{"callback":null,"overlay":{"id":"a86569f9-9ffe-48f0-8eac-ba8bc54077b9","type":"PolyAnnotation"}},"id":"717a2351-9ae8-40f0-b68e-6cce11ea66cf","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"62575670-89c5-4d26-8dc2-6a63ea380650","type":"BoxAnnotation"},{"attributes":{},"id":"9141dd16-1156-4c16-bc44-cdc553dc3473","type":"LinearScale"},{"attributes":{"tools":[{"id":"d5bb27e7-890c-4b8a-a068-073aae4ae266","type":"BoxSelectTool"},{"id":"7a0b8f87-c850-4a56-8c76-f748bc1a23b8","type":"LassoSelectTool"},{"id":"c79af79e-f97a-426c-930e-41a01ced2c5d","type":"HoverTool"},{"id":"115c3f94-edb6-4ff4-a082-64b71ff95219","type":"HelpTool"},{"id":"6d8c71e3-ea69-4581-b503-3dfcd0df9270","type":"BoxSelectTool"},{"id":"717a2351-9ae8-40f0-b68e-6cce11ea66cf","type":"LassoSelectTool"},{"id":"dfff574c-bc87-4413-9b66-6b8a94ef74b7","type":"HoverTool"},{"id":"04232274-ec02-450d-9627-1a4f000dd734","type":"HelpTool"}]},"id":"020aa265-e9ac-4ce0-880e-f880d79a9475","type":"ProxyToolbar"},{"attributes":{},"id":"92b0018f-e57a-432a-aee6-af6e4b6f22ba","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"82b5ab00-0c51-4edd-a9ef-68dad1b42db8","type":"BoxAnnotation"},"renderers":[{"id":"a77d0e39-2474-4a19-b195-682fa4b7016b","type":"GlyphRenderer"}]},"id":"d5bb27e7-890c-4b8a-a068-073aae4ae266","type":"BoxSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"b294806d-8baf-4639-b131-5fa348c60b5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"15053fce-5881-40b6-a529-4a33dc8b3fd1","type":"BasicTicker"}},"id":"ceb5d202-8f45-4e26-b488-6ce2b74c5726","type":"Grid"},{"attributes":{},"id":"62428211-91de-469b-8c0f-5bf4d24f41de","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"ef9b2a19-cb62-4aff-832e-0a3b48881070","subtype":"Figure","type":"Plot"},{"id":"b294806d-8baf-4639-b131-5fa348c60b5a","subtype":"Figure","type":"Plot"}]},"id":"ef0c15e9-4107-4ebe-8d21-b2e33522d93f","type":"Row"},{"attributes":{"callback":null,"overlay":{"id":"62575670-89c5-4d26-8dc2-6a63ea380650","type":"BoxAnnotation"},"renderers":[{"id":"0ae88458-5765-4ca9-819c-d9facab78473","type":"GlyphRenderer"}]},"id":"6d8c71e3-ea69-4581-b503-3dfcd0df9270","type":"BoxSelectTool"},{"attributes":{"source":{"id":"fde5672b-5f58-47e3-8185-a9c34d2c75ed","type":"ColumnDataSource"}},"id":"6348f3bd-b680-4a0e-befd-d397e255c194","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"bfa8523a-e295-48f5-b079-050b88e15d61","type":"Circle"},{"attributes":{"callback":null},"id":"436590d4-ab36-4ea3-a1b4-bfea5fe2875f","type":"DataRange1d"},{"attributes":{},"id":"23ef0bde-6660-445d-806f-b1329b522c78","type":"BasicTickFormatter"},{"attributes":{},"id":"23265723-65c0-4884-997d-64a3d7be22e2","type":"LinearScale"},{"attributes":{},"id":"39f9bb11-8ecb-4934-b66d-5f602e7a8f41","type":"LinearScale"},{"attributes":{"plot":{"id":"b294806d-8baf-4639-b131-5fa348c60b5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"287321a3-fe23-4dde-8626-618998ffc511","type":"BasicTicker"}},"id":"a8105924-a076-43c6-afb9-9a40b7760c82","type":"Grid"},{"attributes":{},"id":"8df28b07-ab89-4652-a4d5-6cf7ba769160","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"82b5ab00-0c51-4edd-a9ef-68dad1b42db8","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"a86569f9-9ffe-48f0-8eac-ba8bc54077b9","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"074fbbd3-c11e-48b1-8f9c-c80277568528","type":"BasicTickFormatter"},"plot":{"id":"ef9b2a19-cb62-4aff-832e-0a3b48881070","subtype":"Figure","type":"Plot"},"ticker":{"id":"92b0018f-e57a-432a-aee6-af6e4b6f22ba","type":"BasicTicker"}},"id":"e9a87ddb-45ef-4c61-b422-29539e5a4507","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8df28b07-ab89-4652-a4d5-6cf7ba769160","type":"BasicTickFormatter"},"plot":{"id":"b294806d-8baf-4639-b131-5fa348c60b5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"287321a3-fe23-4dde-8626-618998ffc511","type":"BasicTicker"}},"id":"ffaa01cd-0c0f-46b5-bd06-47c8e185c0d6","type":"LinearAxis"},{"attributes":{},"id":"115c3f94-edb6-4ff4-a082-64b71ff95219","type":"HelpTool"},{"attributes":{"data_source":{"id":"fde5672b-5f58-47e3-8185-a9c34d2c75ed","type":"ColumnDataSource"},"glyph":{"id":"93b3f328-4012-4f9e-aed4-b54658c87328","type":"Circle"},"hover_glyph":{"id":"34ff1bab-eab2-4e76-831c-e5b10ae69e98","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"a6b9cf04-c38f-4ce3-981d-0a2b351b0d0c","type":"Circle"},"selection_glyph":null,"view":{"id":"6348f3bd-b680-4a0e-befd-d397e255c194","type":"CDSView"}},"id":"a77d0e39-2474-4a19-b195-682fa4b7016b","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d5bb27e7-890c-4b8a-a068-073aae4ae266","type":"BoxSelectTool"},{"id":"7a0b8f87-c850-4a56-8c76-f748bc1a23b8","type":"LassoSelectTool"},{"id":"c79af79e-f97a-426c-930e-41a01ced2c5d","type":"HoverTool"},{"id":"115c3f94-edb6-4ff4-a082-64b71ff95219","type":"HelpTool"}]},"id":"5b706ae1-a913-476c-94b5-cdf5adecd2de","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"a6b9cf04-c38f-4ce3-981d-0a2b351b0d0c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"c19432bd-9372-4be0-a455-4c2fecf43c89","type":"Circle"},{"attributes":{"formatter":{"id":"23ef0bde-6660-445d-806f-b1329b522c78","type":"BasicTickFormatter"},"plot":{"id":"ef9b2a19-cb62-4aff-832e-0a3b48881070","subtype":"Figure","type":"Plot"},"ticker":{"id":"12350f7a-eb46-443f-b24a-fbae776c7e77","type":"BasicTicker"}},"id":"32851d74-1a71-4fd1-88a7-d1fbf7aae28a","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e9cf7b84-b16d-4d90-b6ac-1c4c05d5c44e","type":"DataRange1d"},{"attributes":{"plot":{"id":"ef9b2a19-cb62-4aff-832e-0a3b48881070","subtype":"Figure","type":"Plot"},"ticker":{"id":"92b0018f-e57a-432a-aee6-af6e4b6f22ba","type":"BasicTicker"}},"id":"8d903ce2-ad6d-427b-ad37-bc18e9daa0cc","type":"Grid"},{"attributes":{"children":[{"id":"ef0c15e9-4107-4ebe-8d21-b2e33522d93f","type":"Row"}]},"id":"decee2fc-01f1-4fd5-83c5-e55186bc5e90","type":"Column"},{"attributes":{},"id":"12350f7a-eb46-443f-b24a-fbae776c7e77","type":"BasicTicker"},{"attributes":{},"id":"04232274-ec02-450d-9627-1a4f000dd734","type":"HelpTool"},{"attributes":{},"id":"bc374746-cf41-4a2f-8ae6-1975b6a2c11e","type":"LinearScale"},{"attributes":{"callback":null},"id":"0d6f469d-ce1d-4e3e-acf2-46c3913e5dbf","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"020aa265-e9ac-4ce0-880e-f880d79a9475","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"baa2aa43-656d-44f9-a1e1-3450a2f5e8d1","type":"ToolbarBox"},{"attributes":{"filters":[{"id":"6a0dbda9-eded-48c7-aa56-1ec04e765656","type":"BooleanFilter"}],"source":{"id":"fde5672b-5f58-47e3-8185-a9c34d2c75ed","type":"ColumnDataSource"}},"id":"913ccb2b-8daa-455c-a7c8-66c051de2b1c","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"fde5672b-5f58-47e3-8185-a9c34d2c75ed","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"4e638f5e-fcb8-4ad3-a3c9-55c993f2632b","type":"DataRange1d"}],"root_ids":["02fd9c74-9892-4bda-9b56-51adc92536bf"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"cc933c2c-a6f9-41f4-a4fd-a16fa7ddfc75","elementid":"31a61879-2961-497d-9667-47db221f36c5","modelid":"02fd9c74-9892-4bda-9b56-51adc92536bf"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();