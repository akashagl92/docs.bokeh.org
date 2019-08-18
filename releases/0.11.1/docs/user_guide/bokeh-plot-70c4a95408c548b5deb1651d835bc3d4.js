
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
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
  };var element = document.getElementById("a7aa63c4-5767-494b-bcf0-1c9bb83a1db8");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a7aa63c4-5767-494b-bcf0-1c9bb83a1db8' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f98dd4c7-e274-4fba-8b84-e0ee3f0cf090":{"roots":{"references":[{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"a9323748-e8fb-4c19-945f-224afb3f9f0a","type":"OpenURL"},{"attributes":{"callback":null,"column_names":["y","x","color"],"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"64c0fb51-9acc-49d5-9e69-57fe2e02ca05","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"411faf26-a6c2-4694-b46a-cf9e71c1314d","type":"Circle"},{"attributes":{"callback":null},"id":"38bf9ef0-d5a0-4028-bc25-ed11c392d552","type":"DataRange1d"},{"attributes":{},"id":"97b0c895-1c97-4c36-a6b9-ea768e7fdb02","type":"BasicTickFormatter"},{"attributes":{},"id":"354770d4-3c65-41e0-aecc-d5908eb35afc","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"64c0fb51-9acc-49d5-9e69-57fe2e02ca05","type":"ColumnDataSource"},"glyph":{"id":"c165b003-0ce0-40c5-9951-eb44176734eb","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"411faf26-a6c2-4694-b46a-cf9e71c1314d","type":"Circle"},"selection_glyph":null},"id":"7b26caba-6a90-4d7b-a4e1-24d1dc589543","type":"GlyphRenderer"},{"attributes":{},"id":"eee8f9f7-9ed8-4396-85dc-46e82375806e","type":"BasicTicker"},{"attributes":{"below":[{"id":"cbabd7e0-a950-49b4-9c69-648a1065f437","type":"LinearAxis"}],"left":[{"id":"6b47ba9e-276d-4ab6-924a-68624d669dff","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cbabd7e0-a950-49b4-9c69-648a1065f437","type":"LinearAxis"},{"id":"a6b01ec7-2a38-450a-a714-0c6008d29285","type":"Grid"},{"id":"6b47ba9e-276d-4ab6-924a-68624d669dff","type":"LinearAxis"},{"id":"0ea5f8d0-b387-444e-b84f-e8085fa031e9","type":"Grid"},{"id":"7b26caba-6a90-4d7b-a4e1-24d1dc589543","type":"GlyphRenderer"}],"title":"Click the Dots","tool_events":{"id":"69dc00c0-d5ae-4078-8cc3-22347f7a9b24","type":"ToolEvents"},"tools":[{"id":"b4261fcf-11bb-4912-88ee-b09b09ec7fdf","type":"TapTool"}],"x_range":{"id":"b6be5dc0-2600-43e0-a41a-97172ea0048d","type":"DataRange1d"},"y_range":{"id":"38bf9ef0-d5a0-4028-bc25-ed11c392d552","type":"DataRange1d"}},"id":"61f281ec-59ad-427d-9732-5720190e63c2","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"61f281ec-59ad-427d-9732-5720190e63c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"024732e0-0996-4f37-a587-1136f8cf6970","type":"BasicTicker"}},"id":"0ea5f8d0-b387-444e-b84f-e8085fa031e9","type":"Grid"},{"attributes":{},"id":"69dc00c0-d5ae-4078-8cc3-22347f7a9b24","type":"ToolEvents"},{"attributes":{"formatter":{"id":"97b0c895-1c97-4c36-a6b9-ea768e7fdb02","type":"BasicTickFormatter"},"plot":{"id":"61f281ec-59ad-427d-9732-5720190e63c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"eee8f9f7-9ed8-4396-85dc-46e82375806e","type":"BasicTicker"}},"id":"cbabd7e0-a950-49b4-9c69-648a1065f437","type":"LinearAxis"},{"attributes":{"callback":{"id":"a9323748-e8fb-4c19-945f-224afb3f9f0a","type":"OpenURL"},"plot":{"id":"61f281ec-59ad-427d-9732-5720190e63c2","subtype":"Figure","type":"Plot"}},"id":"b4261fcf-11bb-4912-88ee-b09b09ec7fdf","type":"TapTool"},{"attributes":{},"id":"024732e0-0996-4f37-a587-1136f8cf6970","type":"BasicTicker"},{"attributes":{"plot":{"id":"61f281ec-59ad-427d-9732-5720190e63c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"eee8f9f7-9ed8-4396-85dc-46e82375806e","type":"BasicTicker"}},"id":"a6b01ec7-2a38-450a-a714-0c6008d29285","type":"Grid"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c165b003-0ce0-40c5-9951-eb44176734eb","type":"Circle"},{"attributes":{"formatter":{"id":"354770d4-3c65-41e0-aecc-d5908eb35afc","type":"BasicTickFormatter"},"plot":{"id":"61f281ec-59ad-427d-9732-5720190e63c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"024732e0-0996-4f37-a587-1136f8cf6970","type":"BasicTicker"}},"id":"6b47ba9e-276d-4ab6-924a-68624d669dff","type":"LinearAxis"},{"attributes":{"callback":null},"id":"b6be5dc0-2600-43e0-a41a-97172ea0048d","type":"DataRange1d"}],"root_ids":["61f281ec-59ad-427d-9732-5720190e63c2"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"f98dd4c7-e274-4fba-8b84-e0ee3f0cf090","elementid":"a7aa63c4-5767-494b-bcf0-1c9bb83a1db8","modelid":"61f281ec-59ad-427d-9732-5720190e63c2"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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