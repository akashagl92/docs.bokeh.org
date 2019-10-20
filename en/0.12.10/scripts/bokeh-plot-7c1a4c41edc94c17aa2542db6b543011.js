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
      };var element = document.getElementById("63b3b1d5-fdcf-45ca-917b-a9a60bb976e5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '63b3b1d5-fdcf-45ca-917b-a9a60bb976e5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"4be972e0-6777-44cc-b0e7-e7bf54e1fd04":{"roots":{"references":[{"attributes":{"plot":{"id":"4d12a67c-e3b8-4357-8fcb-ade4d8f3dad4","type":"Plot"},"ticker":{"id":"b72ac39b-1f16-4b92-8a0c-9601f76e9430","type":"BasicTicker"}},"id":"358b571e-ca4c-4af5-8350-019c4c39aa9d","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c1593625-3a25-4add-9ffe-52c6ada23b9d","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"84779ab4-5fed-452e-b257-da5e894ed35c","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"27b42520-5d93-4008-8eb4-bd82a44c4e0b","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"c7f7def5-ffba-4d7d-bdbf-30acfb460ffc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27b42520-5d93-4008-8eb4-bd82a44c4e0b","type":"LinearAxis"},{"id":"c7f7def5-ffba-4d7d-bdbf-30acfb460ffc","type":"LinearAxis"},{"id":"ec1123bb-cba7-4a2b-a492-7e10cc83c4a8","type":"Grid"},{"id":"194e1a94-49d4-4779-b98f-c00849be778d","type":"Grid"},{"id":"efe4a996-a7ae-4d01-be91-749c57b2a249","type":"GlyphRenderer"},{"id":"8f87d100-4f68-423f-85a4-1e32dee5b1cd","type":"GlyphRenderer"}],"title":{"id":"5c477b02-7551-454f-8e95-cf38cda0ea0c","type":"Title"},"toolbar":{"id":"c1593625-3a25-4add-9ffe-52c6ada23b9d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"75055c7b-1e8a-47c4-aee3-db7ce0f98c62","type":"Range1d"},"x_scale":{"id":"3d167b88-8e76-455a-9469-4e0620f39790","type":"LinearScale"},"y_range":{"id":"df348ad1-7c9e-4d75-a296-39c778c893f4","type":"Range1d"},"y_scale":{"id":"1f2f65c0-8044-4c1a-a957-9b9c798bdac2","type":"LinearScale"}},"id":"398eede8-cb7f-46b2-920c-73da4eec7478","type":"Plot"},{"attributes":{},"id":"76dd3918-121e-4404-9a77-cfa02b20910d","type":"BasicTicker"},{"attributes":{"plot":null,"text":"III"},"id":"5c477b02-7551-454f-8e95-cf38cda0ea0c","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"4d12a67c-e3b8-4357-8fcb-ade4d8f3dad4","type":"Plot"},"ticker":{"id":"76dd3918-121e-4404-9a77-cfa02b20910d","type":"BasicTicker"}},"id":"e5c06561-88de-4d9a-9da8-6a76af600565","type":"Grid"},{"attributes":{"data_source":{"id":"508598eb-2b77-4068-af81-68a5dc1f257d","type":"ColumnDataSource"},"glyph":{"id":"c018c7de-7708-49b9-b8c4-f8f23d89057f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d3d9106a-5d7f-4e2a-a6a3-c2fa608f9f91","type":"CDSView"}},"id":"27abfdd8-8a91-469e-a303-ade0b3993d4d","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"363734ac-545d-4297-8471-35af07471e12","type":"Line"},{"attributes":{"data_source":{"id":"0b3d21f7-4229-4aa3-8e90-15ac21b7bf68","type":"ColumnDataSource"},"glyph":{"id":"363734ac-545d-4297-8471-35af07471e12","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4e57ea99-a7ea-41c7-bf45-d85dc068645f","type":"CDSView"}},"id":"a04222ed-b156-4e4e-9415-d5214a946bf2","type":"GlyphRenderer"},{"attributes":{"source":{"id":"508598eb-2b77-4068-af81-68a5dc1f257d","type":"ColumnDataSource"}},"id":"d3d9106a-5d7f-4e2a-a6a3-c2fa608f9f91","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"315c5e26-e000-474a-adf6-f3daaacb8161","type":"Circle"},{"attributes":{"source":{"id":"0b3d21f7-4229-4aa3-8e90-15ac21b7bf68","type":"ColumnDataSource"}},"id":"4e57ea99-a7ea-41c7-bf45-d85dc068645f","type":"CDSView"},{"attributes":{"children":[{"id":"9cdf491f-c6cb-430f-8511-1c4831622253","type":"Plot"},{"id":"ac46d088-74d2-40b7-a1e5-481409bbc229","type":"Plot"}]},"id":"7bbcd395-ddaa-4eb4-b0b0-f398030340d9","type":"Row"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"255a5f09-9324-40f3-af7f-846210c69aa8","type":"BasicTickFormatter"},"plot":{"id":"398eede8-cb7f-46b2-920c-73da4eec7478","type":"Plot"},"ticker":{"id":"422f7c00-0851-481c-bf68-f3fb336acaa1","type":"BasicTicker"}},"id":"27b42520-5d93-4008-8eb4-bd82a44c4e0b","type":"LinearAxis"},{"attributes":{"children":[{"id":"7bbcd395-ddaa-4eb4-b0b0-f398030340d9","type":"Row"},{"id":"b4ecf4f1-235b-4c30-b7af-70bf47fed56b","type":"Row"}]},"id":"8b822581-a54d-49ae-b2d7-24c7ba4ac84e","type":"Column"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"68987009-d091-4d82-9cbc-e67e197e8127","type":"BasicTickFormatter"},"plot":{"id":"398eede8-cb7f-46b2-920c-73da4eec7478","type":"Plot"},"ticker":{"id":"4ec59aee-ef2f-4b3b-af6d-c613d3f740f6","type":"BasicTicker"}},"id":"c7f7def5-ffba-4d7d-bdbf-30acfb460ffc","type":"LinearAxis"},{"attributes":{},"id":"41317ee7-1430-4f93-9ab4-d720116f8def","type":"LinearScale"},{"attributes":{},"id":"422f7c00-0851-481c-bf68-f3fb336acaa1","type":"BasicTicker"},{"attributes":{"data_source":{"id":"508598eb-2b77-4068-af81-68a5dc1f257d","type":"ColumnDataSource"},"glyph":{"id":"84779ab4-5fed-452e-b257-da5e894ed35c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4e869ea6-0a1b-4ced-9b4f-f2e1298d1964","type":"CDSView"}},"id":"df892918-5894-4941-89d3-c79dfb253aea","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"398eede8-cb7f-46b2-920c-73da4eec7478","type":"Plot"},"ticker":{"id":"422f7c00-0851-481c-bf68-f3fb336acaa1","type":"BasicTicker"}},"id":"ec1123bb-cba7-4a2b-a492-7e10cc83c4a8","type":"Grid"},{"attributes":{"source":{"id":"508598eb-2b77-4068-af81-68a5dc1f257d","type":"ColumnDataSource"}},"id":"4e869ea6-0a1b-4ced-9b4f-f2e1298d1964","type":"CDSView"},{"attributes":{},"id":"809aa4ab-c8fc-47b3-8c27-78374208be34","type":"LinearScale"},{"attributes":{},"id":"4ec59aee-ef2f-4b3b-af6d-c613d3f740f6","type":"BasicTicker"},{"attributes":{},"id":"f08f5802-7b29-4760-ad00-beecc2f65d13","type":"LinearScale"},{"attributes":{},"id":"3d167b88-8e76-455a-9469-4e0620f39790","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"398eede8-cb7f-46b2-920c-73da4eec7478","type":"Plot"},"ticker":{"id":"4ec59aee-ef2f-4b3b-af6d-c613d3f740f6","type":"BasicTicker"}},"id":"194e1a94-49d4-4779-b98f-c00849be778d","type":"Grid"},{"attributes":{},"id":"997ef64a-7c8a-4f3c-9055-f0ce2015099d","type":"BasicTickFormatter"},{"attributes":{},"id":"83e6700d-0615-41e8-ab4a-754de57ff5d8","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"74446e1f-d6a1-46cd-bb0c-012a62112c2f","type":"Line"},{"attributes":{"data_source":{"id":"0b3d21f7-4229-4aa3-8e90-15ac21b7bf68","type":"ColumnDataSource"},"glyph":{"id":"74446e1f-d6a1-46cd-bb0c-012a62112c2f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"aee37d4d-3a0e-4b06-9d6d-174f4951ae12","type":"CDSView"}},"id":"efe4a996-a7ae-4d01-be91-749c57b2a249","type":"GlyphRenderer"},{"attributes":{},"id":"05086ffd-35e3-41b9-807b-fb0f780694d4","type":"BasicTickFormatter"},{"attributes":{},"id":"68987009-d091-4d82-9cbc-e67e197e8127","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"0b3d21f7-4229-4aa3-8e90-15ac21b7bf68","type":"ColumnDataSource"}},"id":"aee37d4d-3a0e-4b06-9d6d-174f4951ae12","type":"CDSView"},{"attributes":{},"id":"ef97897e-988a-48b4-bcdd-a0b6638f4514","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"007959d6-a363-4eaf-b4be-9d52d0e5aee2","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"c584e77e-62b3-4b78-9159-2ba10523f95e","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"24d63418-1814-40b6-b850-d78573e44ef4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c584e77e-62b3-4b78-9159-2ba10523f95e","type":"LinearAxis"},{"id":"24d63418-1814-40b6-b850-d78573e44ef4","type":"LinearAxis"},{"id":"358b571e-ca4c-4af5-8350-019c4c39aa9d","type":"Grid"},{"id":"e5c06561-88de-4d9a-9da8-6a76af600565","type":"Grid"},{"id":"a04222ed-b156-4e4e-9415-d5214a946bf2","type":"GlyphRenderer"},{"id":"df892918-5894-4941-89d3-c79dfb253aea","type":"GlyphRenderer"}],"title":{"id":"ec7cb5e2-ba9c-4d85-a6f8-2a9b3e4a2e01","type":"Title"},"toolbar":{"id":"007959d6-a363-4eaf-b4be-9d52d0e5aee2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"75055c7b-1e8a-47c4-aee3-db7ce0f98c62","type":"Range1d"},"x_scale":{"id":"5175d153-98f0-4110-bda3-a9ea9cc98f78","type":"LinearScale"},"y_range":{"id":"df348ad1-7c9e-4d75-a296-39c778c893f4","type":"Range1d"},"y_scale":{"id":"7e53eedf-6249-4129-87ec-9861e81a6e15","type":"LinearScale"}},"id":"4d12a67c-e3b8-4357-8fcb-ade4d8f3dad4","type":"Plot"},{"attributes":{},"id":"5bc4f83f-c7c4-48cc-a21f-bf0dd6de9027","type":"BasicTickFormatter"},{"attributes":{},"id":"1f2f65c0-8044-4c1a-a957-9b9c798bdac2","type":"LinearScale"},{"attributes":{"plot":null,"text":"IV"},"id":"ec7cb5e2-ba9c-4d85-a6f8-2a9b3e4a2e01","type":"Title"},{"attributes":{"data_source":{"id":"508598eb-2b77-4068-af81-68a5dc1f257d","type":"ColumnDataSource"},"glyph":{"id":"315c5e26-e000-474a-adf6-f3daaacb8161","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2a5f9a48-fd48-447a-a1fc-69ed69c0073b","type":"CDSView"}},"id":"8f87d100-4f68-423f-85a4-1e32dee5b1cd","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"398eede8-cb7f-46b2-920c-73da4eec7478","type":"Plot"},{"id":"4d12a67c-e3b8-4357-8fcb-ade4d8f3dad4","type":"Plot"}]},"id":"b4ecf4f1-235b-4c30-b7af-70bf47fed56b","type":"Row"},{"attributes":{"source":{"id":"508598eb-2b77-4068-af81-68a5dc1f257d","type":"ColumnDataSource"}},"id":"2a5f9a48-fd48-447a-a1fc-69ed69c0073b","type":"CDSView"},{"attributes":{},"id":"b72ac39b-1f16-4b92-8a0c-9601f76e9430","type":"BasicTicker"},{"attributes":{},"id":"3644ba00-d5ba-41f8-a03e-ae04e39ab873","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"3644ba00-d5ba-41f8-a03e-ae04e39ab873","type":"BasicTickFormatter"},"plot":{"id":"4d12a67c-e3b8-4357-8fcb-ade4d8f3dad4","type":"Plot"},"ticker":{"id":"b72ac39b-1f16-4b92-8a0c-9601f76e9430","type":"BasicTicker"}},"id":"c584e77e-62b3-4b78-9159-2ba10523f95e","type":"LinearAxis"},{"attributes":{},"id":"5175d153-98f0-4110-bda3-a9ea9cc98f78","type":"LinearScale"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"6cbd5de9-7536-481f-9a31-5bb7962b2fcc","type":"BasicTickFormatter"},"plot":{"id":"4d12a67c-e3b8-4357-8fcb-ade4d8f3dad4","type":"Plot"},"ticker":{"id":"76dd3918-121e-4404-9a77-cfa02b20910d","type":"BasicTicker"}},"id":"24d63418-1814-40b6-b850-d78573e44ef4","type":"LinearAxis"},{"attributes":{},"id":"255a5f09-9324-40f3-af7f-846210c69aa8","type":"BasicTickFormatter"},{"attributes":{},"id":"7e53eedf-6249-4129-87ec-9861e81a6e15","type":"LinearScale"},{"attributes":{},"id":"6cbd5de9-7536-481f-9a31-5bb7962b2fcc","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xi","yi","xii","yii","xiii","yiii","xiv","yiv"],"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}}},"id":"508598eb-2b77-4068-af81-68a5dc1f257d","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"976e9655-e87f-4c93-8d3d-e3a610817c4d","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}}},"id":"0b3d21f7-4229-4aa3-8e90-15ac21b7bf68","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"75055c7b-1e8a-47c4-aee3-db7ce0f98c62","type":"Range1d"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"df348ad1-7c9e-4d75-a296-39c778c893f4","type":"Range1d"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"d2a5a9dd-5abd-48d4-ac1e-2c9827b403c1","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"7ca0731e-6116-4062-94eb-d86b2fcbe0e4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d2a5a9dd-5abd-48d4-ac1e-2c9827b403c1","type":"LinearAxis"},{"id":"7ca0731e-6116-4062-94eb-d86b2fcbe0e4","type":"LinearAxis"},{"id":"8b980fa6-a1d8-44e8-9a61-345aacabd0f2","type":"Grid"},{"id":"902e2bcd-0f5b-4c54-825b-4c5afed76f06","type":"Grid"},{"id":"9590ce36-6957-45f9-b763-d4c0007d648c","type":"GlyphRenderer"},{"id":"499b7cb9-86ef-47d1-9e21-8167c80f0d9a","type":"GlyphRenderer"}],"title":{"id":"ba74b1f6-f7a5-42ea-8c50-3eeb26994f28","type":"Title"},"toolbar":{"id":"976e9655-e87f-4c93-8d3d-e3a610817c4d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"75055c7b-1e8a-47c4-aee3-db7ce0f98c62","type":"Range1d"},"x_scale":{"id":"41317ee7-1430-4f93-9ab4-d720116f8def","type":"LinearScale"},"y_range":{"id":"df348ad1-7c9e-4d75-a296-39c778c893f4","type":"Range1d"},"y_scale":{"id":"809aa4ab-c8fc-47b3-8c27-78374208be34","type":"LinearScale"}},"id":"9cdf491f-c6cb-430f-8511-1c4831622253","type":"Plot"},{"attributes":{"plot":null,"text":"I"},"id":"ba74b1f6-f7a5-42ea-8c50-3eeb26994f28","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"e8a20c0c-2f77-45ad-8a14-deed7e010465","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"05086ffd-35e3-41b9-807b-fb0f780694d4","type":"BasicTickFormatter"},"plot":{"id":"9cdf491f-c6cb-430f-8511-1c4831622253","type":"Plot"},"ticker":{"id":"046d8a58-86df-4685-a592-946528aaebfd","type":"BasicTicker"}},"id":"d2a5a9dd-5abd-48d4-ac1e-2c9827b403c1","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"83e6700d-0615-41e8-ab4a-754de57ff5d8","type":"BasicTickFormatter"},"plot":{"id":"9cdf491f-c6cb-430f-8511-1c4831622253","type":"Plot"},"ticker":{"id":"e31c474a-1e79-48dc-9351-811a6ae735af","type":"BasicTicker"}},"id":"7ca0731e-6116-4062-94eb-d86b2fcbe0e4","type":"LinearAxis"},{"attributes":{},"id":"046d8a58-86df-4685-a592-946528aaebfd","type":"BasicTicker"},{"attributes":{"plot":{"id":"9cdf491f-c6cb-430f-8511-1c4831622253","type":"Plot"},"ticker":{"id":"046d8a58-86df-4685-a592-946528aaebfd","type":"BasicTicker"}},"id":"8b980fa6-a1d8-44e8-9a61-345aacabd0f2","type":"Grid"},{"attributes":{},"id":"e31c474a-1e79-48dc-9351-811a6ae735af","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"9cdf491f-c6cb-430f-8511-1c4831622253","type":"Plot"},"ticker":{"id":"e31c474a-1e79-48dc-9351-811a6ae735af","type":"BasicTicker"}},"id":"902e2bcd-0f5b-4c54-825b-4c5afed76f06","type":"Grid"},{"attributes":{"source":{"id":"0b3d21f7-4229-4aa3-8e90-15ac21b7bf68","type":"ColumnDataSource"}},"id":"464f2438-aa3c-4c2f-b93f-88822ea46f7c","type":"CDSView"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b01a40f3-5622-4607-be7d-75c36aff3b1a","type":"Line"},{"attributes":{"data_source":{"id":"0b3d21f7-4229-4aa3-8e90-15ac21b7bf68","type":"ColumnDataSource"},"glyph":{"id":"b01a40f3-5622-4607-be7d-75c36aff3b1a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5b47c904-b285-40af-8aae-ded0e5e5b615","type":"CDSView"}},"id":"9590ce36-6957-45f9-b763-d4c0007d648c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"0b3d21f7-4229-4aa3-8e90-15ac21b7bf68","type":"ColumnDataSource"}},"id":"5b47c904-b285-40af-8aae-ded0e5e5b615","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"56dd5a75-7d02-4946-98e1-db54f5bd4f55","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"42d8f743-673f-4e7d-98cb-97251ddd9861","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"35da781e-e133-4a6d-bc7b-9c6b6acaf985","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"42d8f743-673f-4e7d-98cb-97251ddd9861","type":"LinearAxis"},{"id":"35da781e-e133-4a6d-bc7b-9c6b6acaf985","type":"LinearAxis"},{"id":"d16d95ee-b277-4d6e-8377-fb41683c2f38","type":"Grid"},{"id":"84acb15e-7ed1-409f-9665-54eed26808e6","type":"Grid"},{"id":"1f00fd0e-bb4c-470a-9b9c-88c8186ac60c","type":"GlyphRenderer"},{"id":"27abfdd8-8a91-469e-a303-ade0b3993d4d","type":"GlyphRenderer"}],"title":{"id":"207aa8ef-6ae1-4c9d-baf8-d321e5be3676","type":"Title"},"toolbar":{"id":"56dd5a75-7d02-4946-98e1-db54f5bd4f55","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"75055c7b-1e8a-47c4-aee3-db7ce0f98c62","type":"Range1d"},"x_scale":{"id":"f08f5802-7b29-4760-ad00-beecc2f65d13","type":"LinearScale"},"y_range":{"id":"df348ad1-7c9e-4d75-a296-39c778c893f4","type":"Range1d"},"y_scale":{"id":"ef97897e-988a-48b4-bcdd-a0b6638f4514","type":"LinearScale"}},"id":"ac46d088-74d2-40b7-a1e5-481409bbc229","type":"Plot"},{"attributes":{"plot":null,"text":"II"},"id":"207aa8ef-6ae1-4c9d-baf8-d321e5be3676","type":"Title"},{"attributes":{"data_source":{"id":"508598eb-2b77-4068-af81-68a5dc1f257d","type":"ColumnDataSource"},"glyph":{"id":"e8a20c0c-2f77-45ad-8a14-deed7e010465","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"dc7acd96-260a-4909-8df8-fc28a487081b","type":"CDSView"}},"id":"499b7cb9-86ef-47d1-9e21-8167c80f0d9a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"508598eb-2b77-4068-af81-68a5dc1f257d","type":"ColumnDataSource"}},"id":"dc7acd96-260a-4909-8df8-fc28a487081b","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"c018c7de-7708-49b9-b8c4-f8f23d89057f","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"997ef64a-7c8a-4f3c-9055-f0ce2015099d","type":"BasicTickFormatter"},"plot":{"id":"ac46d088-74d2-40b7-a1e5-481409bbc229","type":"Plot"},"ticker":{"id":"a0871fb2-8632-466a-b681-a4737e1341c3","type":"BasicTicker"}},"id":"42d8f743-673f-4e7d-98cb-97251ddd9861","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5bc4f83f-c7c4-48cc-a21f-bf0dd6de9027","type":"BasicTickFormatter"},"plot":{"id":"ac46d088-74d2-40b7-a1e5-481409bbc229","type":"Plot"},"ticker":{"id":"b58e2d7e-38e0-4b3a-9d5a-bf983104591f","type":"BasicTicker"}},"id":"35da781e-e133-4a6d-bc7b-9c6b6acaf985","type":"LinearAxis"},{"attributes":{},"id":"a0871fb2-8632-466a-b681-a4737e1341c3","type":"BasicTicker"},{"attributes":{"plot":{"id":"ac46d088-74d2-40b7-a1e5-481409bbc229","type":"Plot"},"ticker":{"id":"a0871fb2-8632-466a-b681-a4737e1341c3","type":"BasicTicker"}},"id":"d16d95ee-b277-4d6e-8377-fb41683c2f38","type":"Grid"},{"attributes":{},"id":"b58e2d7e-38e0-4b3a-9d5a-bf983104591f","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ac46d088-74d2-40b7-a1e5-481409bbc229","type":"Plot"},"ticker":{"id":"b58e2d7e-38e0-4b3a-9d5a-bf983104591f","type":"BasicTicker"}},"id":"84acb15e-7ed1-409f-9665-54eed26808e6","type":"Grid"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f240759d-bfb6-46ae-be68-1b33ae4704e4","type":"Line"},{"attributes":{"data_source":{"id":"0b3d21f7-4229-4aa3-8e90-15ac21b7bf68","type":"ColumnDataSource"},"glyph":{"id":"f240759d-bfb6-46ae-be68-1b33ae4704e4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"464f2438-aa3c-4c2f-b93f-88822ea46f7c","type":"CDSView"}},"id":"1f00fd0e-bb4c-470a-9b9c-88c8186ac60c","type":"GlyphRenderer"}],"root_ids":["8b822581-a54d-49ae-b2d7-24c7ba4ac84e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"4be972e0-6777-44cc-b0e7-e7bf54e1fd04","elementid":"63b3b1d5-fdcf-45ca-917b-a9a60bb976e5","modelid":"8b822581-a54d-49ae-b2d7-24c7ba4ac84e"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
