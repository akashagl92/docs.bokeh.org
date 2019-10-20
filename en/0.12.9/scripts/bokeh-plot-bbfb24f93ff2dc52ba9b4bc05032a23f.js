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
      };var element = document.getElementById("572ccaaa-5924-408b-bffb-ee2cfed390c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '572ccaaa-5924-408b-bffb-ee2cfed390c2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"ae7292c0-7ddf-485b-8b15-3ed268dc758e":{"roots":{"references":[{"attributes":{"callback":null},"id":"d2f8d7b1-b393-470e-be4b-3c5236ffeae4","type":"DataRange1d"},{"attributes":{"overlay":{"id":"673eefec-b679-4f98-a926-bb5e4f6bcaa3","type":"BoxAnnotation"}},"id":"dbb9c7d9-7bd3-42b8-95ba-99998ab1dfa2","type":"BoxZoomTool"},{"attributes":{},"id":"59abc528-b2e9-490a-abab-5bf8cdc206c6","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"673eefec-b679-4f98-a926-bb5e4f6bcaa3","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"7cacc438-7e36-4dc6-bebb-0410eeb11e77","type":"BasicTickFormatter"},"plot":{"id":"7161a573-7822-416a-a199-4bbdd3f0323a","subtype":"Figure","type":"Plot"},"ticker":{"id":"64ee8421-ce13-4c92-bb85-c3566c485153","type":"BasicTicker"}},"id":"9bc342c7-97fc-4d47-ac60-163d4c579cb3","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fc0f77d-8275-45a7-a43e-9d58c3c8abbd","type":"Square"},{"attributes":{},"id":"4229cd0b-49ad-4536-8996-cf1584b65a18","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"738988f0-c9fc-4f92-a076-c6a91180e272","type":"PanTool"},{"id":"4229cd0b-49ad-4536-8996-cf1584b65a18","type":"WheelZoomTool"},{"id":"f252fdc1-adfc-4cea-ad48-6d458e8e8fa8","type":"BoxZoomTool"},{"id":"59b754bf-b9b0-4fe0-802a-f8f8ed75f7b7","type":"SaveTool"},{"id":"f2660936-0b42-43a3-a722-d83258f04d49","type":"ResetTool"},{"id":"d468051d-23bc-4176-b023-7a055c5a5f4b","type":"HelpTool"}]},"id":"5eb496e5-8e9c-4479-b56b-4046ea590988","type":"Toolbar"},{"attributes":{"plot":{"id":"7161a573-7822-416a-a199-4bbdd3f0323a","subtype":"Figure","type":"Plot"},"ticker":{"id":"779c7388-08c7-4e56-9524-3fa1fdf8140f","type":"BasicTicker"}},"id":"e52f9fd9-f06e-4052-be7e-14064814d983","type":"Grid"},{"attributes":{},"id":"3c412200-b983-4c93-bc51-8b2912f7cb41","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8b7d2d57-1df6-4171-b279-fd857fb5e04c","type":"BasicTickFormatter"},"plot":{"id":"18935ddc-4ffd-47f4-8850-aa2d4e79127a","subtype":"Figure","type":"Plot"},"ticker":{"id":"59abc528-b2e9-490a-abab-5bf8cdc206c6","type":"BasicTicker"}},"id":"3584128a-e322-47f2-a8ee-2bfbd5fa9e18","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"42036ab6-29af-4538-a0f5-a89e87a98236","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"75cf0d2e-9763-497a-8d3c-17aa4f045658","type":"Square"},{"attributes":{"source":{"id":"42036ab6-29af-4538-a0f5-a89e87a98236","type":"ColumnDataSource"}},"id":"87039e4d-6cee-4ad2-9741-1850b41f7cc6","type":"CDSView"},{"attributes":{"below":[{"id":"1c946a91-9d74-4a1c-8268-9d649537e618","type":"LinearAxis"}],"left":[{"id":"1bffab28-2778-468e-ad3b-d1cfe1a7d99a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"1c946a91-9d74-4a1c-8268-9d649537e618","type":"LinearAxis"},{"id":"a7e55d0d-8f6d-4656-8aae-368ba770bd26","type":"Grid"},{"id":"1bffab28-2778-468e-ad3b-d1cfe1a7d99a","type":"LinearAxis"},{"id":"7c4bc1c8-6ba1-424f-99ba-04f2d8b3219e","type":"Grid"},{"id":"f40c5434-d630-4f79-944b-4fd7249a2792","type":"BoxAnnotation"},{"id":"f67c4473-fa28-4530-9ddc-41c39de86e20","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"5eb496e5-8e9c-4479-b56b-4046ea590988","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"07ee3597-62a6-4203-a46f-143582efc2fc","type":"DataRange1d"},"x_scale":{"id":"bccbfd84-946b-4911-8382-fdb622315b56","type":"LinearScale"},"y_range":{"id":"d2f8d7b1-b393-470e-be4b-3c5236ffeae4","type":"DataRange1d"},"y_scale":{"id":"51f69555-a2ac-4018-babf-2d9ab4a4cfc4","type":"LinearScale"}},"id":"4dea1c37-2ac6-44e7-8737-71f9b9df37f0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"660d8555-cef5-4129-a2d7-5831152e210a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"4dea1c37-2ac6-44e7-8737-71f9b9df37f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f36cfdf-59c4-4fd0-a490-35842a642e19","type":"BasicTicker"}},"id":"7c4bc1c8-6ba1-424f-99ba-04f2d8b3219e","type":"Grid"},{"attributes":{},"id":"e0daed22-2573-45db-98d0-fe90be65c811","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e0daed22-2573-45db-98d0-fe90be65c811","type":"BasicTickFormatter"},"plot":{"id":"4dea1c37-2ac6-44e7-8737-71f9b9df37f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"32b9cf70-ab6a-4f92-bcf9-19c1140e2f34","type":"BasicTicker"}},"id":"1c946a91-9d74-4a1c-8268-9d649537e618","type":"LinearAxis"},{"attributes":{"data_source":{"id":"035b67e3-e747-453a-8b45-e66b52335953","type":"ColumnDataSource"},"glyph":{"id":"b41c6236-5f20-46ef-ac71-7e1baffe3a17","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1df429d5-1b6c-4a30-862b-522712b10fb6","type":"Triangle"},"selection_glyph":null,"view":{"id":"ddc01ace-88be-49a8-a2f5-c4152b999be6","type":"CDSView"}},"id":"ad74aec1-763a-4e55-8cba-841368b3e8ab","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e35c5e35-7a5b-46a3-98b2-1a49b92cf4ab","type":"PanTool"},{"id":"8c933333-02a5-4990-b4bf-782421f6b119","type":"WheelZoomTool"},{"id":"5661fdc1-c4b5-410e-8d22-ab360d4ecfe7","type":"BoxZoomTool"},{"id":"224b88b4-5ebe-4784-899d-a321ae014c30","type":"SaveTool"},{"id":"7fc2bb6d-8db8-4f36-9b45-0c93f1339b9e","type":"ResetTool"},{"id":"c3b27e04-d157-44e9-bd59-bc949ba67e3a","type":"HelpTool"}]},"id":"9bf40017-b9bf-4701-8c07-c6eb4d4070e5","type":"Toolbar"},{"attributes":{"callback":null},"id":"bef528da-b67a-40f4-9d7a-e65c4b6d0062","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b41c6236-5f20-46ef-ac71-7e1baffe3a17","type":"Triangle"},{"attributes":{},"id":"d468051d-23bc-4176-b023-7a055c5a5f4b","type":"HelpTool"},{"attributes":{"data_source":{"id":"42036ab6-29af-4538-a0f5-a89e87a98236","type":"ColumnDataSource"},"glyph":{"id":"5e471324-e120-459d-a557-5a9358181516","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31fdf2da-57c3-43b9-bd7b-0fbe3a7ff9b8","type":"Circle"},"selection_glyph":null,"view":{"id":"87039e4d-6cee-4ad2-9741-1850b41f7cc6","type":"CDSView"}},"id":"f67c4473-fa28-4530-9ddc-41c39de86e20","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"4709f4b6-53c7-4eae-821e-cd30783c74fb","type":"BasicTickFormatter"},"plot":{"id":"18935ddc-4ffd-47f4-8850-aa2d4e79127a","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c412200-b983-4c93-bc51-8b2912f7cb41","type":"BasicTicker"}},"id":"734eeab3-879c-4f6c-9d28-1812cc750380","type":"LinearAxis"},{"attributes":{},"id":"3f36cfdf-59c4-4fd0-a490-35842a642e19","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e400bcba-44ff-4a38-837f-42466d5bcf9a","type":"PanTool"},{"id":"1ce5b57a-604c-4025-9c3a-7c361f1e5439","type":"WheelZoomTool"},{"id":"dbb9c7d9-7bd3-42b8-95ba-99998ab1dfa2","type":"BoxZoomTool"},{"id":"f1bcc729-08bd-4a49-b82a-41049f50ea63","type":"SaveTool"},{"id":"d670d41b-a737-4afa-b1c7-132985135f5c","type":"ResetTool"},{"id":"52f02633-f66c-4f1b-9a27-cd6659a319f0","type":"HelpTool"}]},"id":"41e6db2a-3726-4411-b363-59c20371dbd9","type":"Toolbar"},{"attributes":{},"id":"4709f4b6-53c7-4eae-821e-cd30783c74fb","type":"BasicTickFormatter"},{"attributes":{},"id":"738988f0-c9fc-4f92-a076-c6a91180e272","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"d44b9edb-8d8e-44cc-b4d3-05e18f79aed4","type":"ColumnDataSource"},{"attributes":{},"id":"97aea2f7-9829-4696-b07b-c8fcfbcb2f48","type":"LinearScale"},{"attributes":{},"id":"2639fa11-8a55-458e-b988-2fbd916f937e","type":"LinearScale"},{"attributes":{},"id":"e35c5e35-7a5b-46a3-98b2-1a49b92cf4ab","type":"PanTool"},{"attributes":{"callback":null},"id":"07ee3597-62a6-4203-a46f-143582efc2fc","type":"DataRange1d"},{"attributes":{},"id":"f2660936-0b42-43a3-a722-d83258f04d49","type":"ResetTool"},{"attributes":{},"id":"8c933333-02a5-4990-b4bf-782421f6b119","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1be2b53b-74e8-4100-9e7b-39f0daab9848","type":"BoxAnnotation"}},"id":"5661fdc1-c4b5-410e-8d22-ab360d4ecfe7","type":"BoxZoomTool"},{"attributes":{},"id":"f1bcc729-08bd-4a49-b82a-41049f50ea63","type":"SaveTool"},{"attributes":{},"id":"779c7388-08c7-4e56-9524-3fa1fdf8140f","type":"BasicTicker"},{"attributes":{"source":{"id":"035b67e3-e747-453a-8b45-e66b52335953","type":"ColumnDataSource"}},"id":"ddc01ace-88be-49a8-a2f5-c4152b999be6","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"18935ddc-4ffd-47f4-8850-aa2d4e79127a","subtype":"Figure","type":"Plot"},"ticker":{"id":"59abc528-b2e9-490a-abab-5bf8cdc206c6","type":"BasicTicker"}},"id":"307f30af-2901-4874-acb6-b06b65b6f76c","type":"Grid"},{"attributes":{},"id":"51f69555-a2ac-4018-babf-2d9ab4a4cfc4","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31fdf2da-57c3-43b9-bd7b-0fbe3a7ff9b8","type":"Circle"},{"attributes":{},"id":"7cacc438-7e36-4dc6-bebb-0410eeb11e77","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"734eeab3-879c-4f6c-9d28-1812cc750380","type":"LinearAxis"}],"left":[{"id":"3584128a-e322-47f2-a8ee-2bfbd5fa9e18","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"734eeab3-879c-4f6c-9d28-1812cc750380","type":"LinearAxis"},{"id":"f26c4aba-9927-4f6f-88e3-ef39497583ac","type":"Grid"},{"id":"3584128a-e322-47f2-a8ee-2bfbd5fa9e18","type":"LinearAxis"},{"id":"307f30af-2901-4874-acb6-b06b65b6f76c","type":"Grid"},{"id":"1be2b53b-74e8-4100-9e7b-39f0daab9848","type":"BoxAnnotation"},{"id":"99966975-d8c2-4012-9a64-ad7fe9b99b5c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9bf40017-b9bf-4701-8c07-c6eb4d4070e5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"07ee3597-62a6-4203-a46f-143582efc2fc","type":"DataRange1d"},"x_scale":{"id":"2639fa11-8a55-458e-b988-2fbd916f937e","type":"LinearScale"},"y_range":{"id":"bef528da-b67a-40f4-9d7a-e65c4b6d0062","type":"DataRange1d"},"y_scale":{"id":"1e2a16f7-5aff-4886-87e9-4f2afc90cbf2","type":"LinearScale"}},"id":"18935ddc-4ffd-47f4-8850-aa2d4e79127a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e400bcba-44ff-4a38-837f-42466d5bcf9a","type":"PanTool"},{"attributes":{},"id":"1ce5b57a-604c-4025-9c3a-7c361f1e5439","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"7161a573-7822-416a-a199-4bbdd3f0323a","subtype":"Figure","type":"Plot"},"ticker":{"id":"64ee8421-ce13-4c92-bb85-c3566c485153","type":"BasicTicker"}},"id":"acf017a6-be08-4b13-be44-a776dc632c16","type":"Grid"},{"attributes":{},"id":"c4e236aa-6e69-4047-837b-eba7f1c7d884","type":"BasicTickFormatter"},{"attributes":{},"id":"52f02633-f66c-4f1b-9a27-cd6659a319f0","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1df429d5-1b6c-4a30-862b-522712b10fb6","type":"Triangle"},{"attributes":{"formatter":{"id":"660d8555-cef5-4129-a2d7-5831152e210a","type":"BasicTickFormatter"},"plot":{"id":"4dea1c37-2ac6-44e7-8737-71f9b9df37f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f36cfdf-59c4-4fd0-a490-35842a642e19","type":"BasicTicker"}},"id":"1bffab28-2778-468e-ad3b-d1cfe1a7d99a","type":"LinearAxis"},{"attributes":{},"id":"6cad8b4c-eea9-41c9-ba2a-b1e6bfdfb76a","type":"LinearScale"},{"attributes":{},"id":"d670d41b-a737-4afa-b1c7-132985135f5c","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f40c5434-d630-4f79-944b-4fd7249a2792","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1be2b53b-74e8-4100-9e7b-39f0daab9848","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e471324-e120-459d-a557-5a9358181516","type":"Circle"},{"attributes":{"data_source":{"id":"d44b9edb-8d8e-44cc-b4d3-05e18f79aed4","type":"ColumnDataSource"},"glyph":{"id":"75cf0d2e-9763-497a-8d3c-17aa4f045658","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7fc0f77d-8275-45a7-a43e-9d58c3c8abbd","type":"Square"},"selection_glyph":null,"view":{"id":"789a066a-0cf6-4b72-a753-bc886ce62f0f","type":"CDSView"}},"id":"99966975-d8c2-4012-9a64-ad7fe9b99b5c","type":"GlyphRenderer"},{"attributes":{},"id":"64ee8421-ce13-4c92-bb85-c3566c485153","type":"BasicTicker"},{"attributes":{"children":[{"id":"36829b51-eb3b-4f87-bee4-9eab61749557","type":"Row"}]},"id":"20749065-338a-46b6-9bb4-bd48e9034033","type":"Column"},{"attributes":{},"id":"32b9cf70-ab6a-4f92-bcf9-19c1140e2f34","type":"BasicTicker"},{"attributes":{},"id":"7fc2bb6d-8db8-4f36-9b45-0c93f1339b9e","type":"ResetTool"},{"attributes":{"below":[{"id":"1a39521a-b6dd-49df-9afc-ac1a0234210a","type":"LinearAxis"}],"left":[{"id":"9bc342c7-97fc-4d47-ac60-163d4c579cb3","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"1a39521a-b6dd-49df-9afc-ac1a0234210a","type":"LinearAxis"},{"id":"e52f9fd9-f06e-4052-be7e-14064814d983","type":"Grid"},{"id":"9bc342c7-97fc-4d47-ac60-163d4c579cb3","type":"LinearAxis"},{"id":"acf017a6-be08-4b13-be44-a776dc632c16","type":"Grid"},{"id":"673eefec-b679-4f98-a926-bb5e4f6bcaa3","type":"BoxAnnotation"},{"id":"ad74aec1-763a-4e55-8cba-841368b3e8ab","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"41e6db2a-3726-4411-b363-59c20371dbd9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"07ee3597-62a6-4203-a46f-143582efc2fc","type":"DataRange1d"},"x_scale":{"id":"6cad8b4c-eea9-41c9-ba2a-b1e6bfdfb76a","type":"LinearScale"},"y_range":{"id":"d2f8d7b1-b393-470e-be4b-3c5236ffeae4","type":"DataRange1d"},"y_scale":{"id":"97aea2f7-9829-4696-b07b-c8fcfbcb2f48","type":"LinearScale"}},"id":"7161a573-7822-416a-a199-4bbdd3f0323a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c3b27e04-d157-44e9-bd59-bc949ba67e3a","type":"HelpTool"},{"attributes":{"overlay":{"id":"f40c5434-d630-4f79-944b-4fd7249a2792","type":"BoxAnnotation"}},"id":"f252fdc1-adfc-4cea-ad48-6d458e8e8fa8","type":"BoxZoomTool"},{"attributes":{},"id":"1e2a16f7-5aff-4886-87e9-4f2afc90cbf2","type":"LinearScale"},{"attributes":{"source":{"id":"d44b9edb-8d8e-44cc-b4d3-05e18f79aed4","type":"ColumnDataSource"}},"id":"789a066a-0cf6-4b72-a753-bc886ce62f0f","type":"CDSView"},{"attributes":{"children":[{"id":"4dea1c37-2ac6-44e7-8737-71f9b9df37f0","subtype":"Figure","type":"Plot"},{"id":"7161a573-7822-416a-a199-4bbdd3f0323a","subtype":"Figure","type":"Plot"},{"id":"18935ddc-4ffd-47f4-8850-aa2d4e79127a","subtype":"Figure","type":"Plot"}]},"id":"36829b51-eb3b-4f87-bee4-9eab61749557","type":"Row"},{"attributes":{},"id":"bccbfd84-946b-4911-8382-fdb622315b56","type":"LinearScale"},{"attributes":{},"id":"59b754bf-b9b0-4fe0-802a-f8f8ed75f7b7","type":"SaveTool"},{"attributes":{"formatter":{"id":"c4e236aa-6e69-4047-837b-eba7f1c7d884","type":"BasicTickFormatter"},"plot":{"id":"7161a573-7822-416a-a199-4bbdd3f0323a","subtype":"Figure","type":"Plot"},"ticker":{"id":"779c7388-08c7-4e56-9524-3fa1fdf8140f","type":"BasicTicker"}},"id":"1a39521a-b6dd-49df-9afc-ac1a0234210a","type":"LinearAxis"},{"attributes":{"plot":{"id":"18935ddc-4ffd-47f4-8850-aa2d4e79127a","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c412200-b983-4c93-bc51-8b2912f7cb41","type":"BasicTicker"}},"id":"f26c4aba-9927-4f6f-88e3-ef39497583ac","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"035b67e3-e747-453a-8b45-e66b52335953","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4dea1c37-2ac6-44e7-8737-71f9b9df37f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"32b9cf70-ab6a-4f92-bcf9-19c1140e2f34","type":"BasicTicker"}},"id":"a7e55d0d-8f6d-4656-8aae-368ba770bd26","type":"Grid"},{"attributes":{},"id":"224b88b4-5ebe-4784-899d-a321ae014c30","type":"SaveTool"},{"attributes":{},"id":"8b7d2d57-1df6-4171-b279-fd857fb5e04c","type":"BasicTickFormatter"}],"root_ids":["20749065-338a-46b6-9bb4-bd48e9034033"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"ae7292c0-7ddf-485b-8b15-3ed268dc758e","elementid":"572ccaaa-5924-408b-bffb-ee2cfed390c2","modelid":"20749065-338a-46b6-9bb4-bd48e9034033"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
